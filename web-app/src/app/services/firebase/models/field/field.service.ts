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
import { Observable, of } from 'rxjs';

import { Field } from '#types/firebase/models/field';

import { ListOptions, Model } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FieldService implements Model<Field> {
  private store: Firestore = inject(Firestore);

  private collectionPath = 'fields';

  get(id: string): Observable<Field | null> {
    const result = docData(doc(this.store, this.collectionPath, id));
    return result as Observable<Field>;
  }

  list(options: ListOptions) {
    const collectionRef = collection(this.store, this.collectionPath);
    const { itemByPage, order } = options;
    return {
      first: () => (collectionData(
        query(
          collectionRef,
          orderBy(order),
          limit(itemByPage || 10),
        ),
      ) as Observable<Field[]>),
      next: (lastResponse: DocumentSnapshot) => (lastResponse ? (collectionData(
        query(
          collectionRef,
          orderBy(order),
          limit(itemByPage || 10),
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
}
