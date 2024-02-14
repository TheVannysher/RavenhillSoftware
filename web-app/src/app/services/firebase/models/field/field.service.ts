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
  serverTimestamp,
  setDoc,
  startAfter,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

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
    return docData(doc(this.store, this.collectionPath, id)) as Observable<Field>;
  }

  getAll(): Observable<Field[]> {
    return collectionData(collection(this.store, this.collectionPath)) as Observable<Field[]>;
  }

  list(pageSize: number = 10, order: keyof Field = 'id', startAfterId?: string): Observable<Field[]> {
    const fieldsCollection = collection(this.store, this.collectionPath);
    let fieldQuery;
    if (startAfterId) {
      fieldQuery = query(fieldsCollection, orderBy(order), startAfter(startAfterId), limit(pageSize));
    } else {
      fieldQuery = query(fieldsCollection, orderBy(order), limit(pageSize));
    }
    return collectionData(fieldQuery) as Observable<Field[]>;
  };

  async set(id: string, data: Partial<Field>) {
    await setDoc(doc(this.store, this.collectionPath, id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
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
