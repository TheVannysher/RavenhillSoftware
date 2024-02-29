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

import { Variety } from '#types/firebase/models/vine';

import { ListOptions, ListQueryReturn, Model } from '../types';

@Injectable({
  providedIn: 'root',
})
export class VarietyService implements Model<Variety> {
  private store: Firestore = inject(Firestore);

  private collectionPath = 'varieties';

  async delete(id: string): Promise<void> {
    await deleteDoc(doc(this.store, this.collectionPath, id));
  }

  get(id: string): Observable<Variety | null> {
    return docData(doc(this.store, this.collectionPath, id)) as Observable<Variety | null>;
  }

  list(options: ListOptions | undefined = { order: 'name', itemByPage: 10 }): ListQueryReturn<Variety> {
    const collectionRef = collection(this.store, this.collectionPath);
    const { itemByPage, order } = options;
    return {
      first: () => (collectionData(
        query(
          collectionRef,
          orderBy(order),
          limit(itemByPage),
        ),
      ) as Observable<Variety[]>),
      next: (lastResponse: DocumentSnapshot) => (lastResponse ? (collectionData(
        query(
          collectionRef,
          orderBy(order),
          limit(itemByPage),
          startAfter(lastResponse),
        ),
      ) as Observable<Variety[]>) : (of(null))),
    };
  }

  async set(id: string, data: Partial<Variety>): Promise<void> {
    await setDoc(doc(this.store, this.collectionPath, id), { ...data });
  }
}
