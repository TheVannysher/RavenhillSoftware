import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  DocumentSnapshot,
  Firestore,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
} from '@angular/fire/firestore';
import { map, Observable, of } from 'rxjs';

import { Field } from '#types/firebase/models/field';
import { Vine } from '#types/firebase/models/vine';

import { ListOptions, Model } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FieldService implements Model<Field> {
  private store: Firestore = inject(Firestore);

  private collectionPath = 'fields';

  private subCollectionPath = {
    blocks: 'blocks',
    vines: 'vines',
  };

  get(id: string): Observable<Field | null> {
    const result = docData(doc(this.store, this.collectionPath, id)).pipe(map((value) => {
      const f = value as Field;
      const data = {
        ...f,
        vines: collectionData(
          collection(this.store, this.collectionPath, ...[f.id, this.subCollectionPath.vines]),
        ).pipe(map((v) => (v as Vine[]))),
      };
      return data;
    }));
    return result as Observable<Field>;
  }

  listAll(): Observable<Field[]> {
    return collectionData(collection(this.store, this.collectionPath)) as Observable<Field[]>;
  }

  list(options: ListOptions | undefined = { order: 'createdAt', itemByPage: 10 }) {
    const collectionRef = collection(this.store, this.collectionPath);
    const { itemByPage, order } = options;
    return {
      first: () => (collectionData(
        query(
          collectionRef,
          orderBy(order),
          limit(itemByPage),
        ),
      ) as Observable<Field[]>),
      next: (lastResponse: DocumentSnapshot) => (lastResponse ? (collectionData(
        query(
          collectionRef,
          orderBy(order),
          limit(itemByPage),
          startAfter(lastResponse),
        ),
      ) as Observable<Field[]>) : (of(null))),
    };
  }

  async set(id: string, data: Partial<Field>) {
    await setDoc(doc(this.store, this.collectionPath, id), { ...data });
  }

  async delete(id: string) {
    await deleteDoc(doc(this.store, this.collectionPath, id));
  }

  getVine(id: string, field_Id: string) {
    return docData(
      doc(this.store, this.collectionPath, field_Id, this.subCollectionPath.vines, id),
    ) as Observable<Vine>;
  }

  getAllVine(field_Id: string) {
    return collectionData(
      collection(this.store, this.collectionPath, field_Id, this.subCollectionPath.vines),
    ) as Observable<Vine[]>;
  }

  async setVine(id: string, field_Id: string, data: Partial<Vine>) {
    await setDoc(
      doc(this.store, this.collectionPath, field_Id, this.subCollectionPath.vines, id),
      { ...data },
    );
  }
}
