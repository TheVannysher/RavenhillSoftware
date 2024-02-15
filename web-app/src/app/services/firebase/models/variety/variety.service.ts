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

import { Model, PaginatedQueryArgs } from '../types';

@Injectable({
  providedIn: 'root',
})
export class VarietyService implements Model<Variety> {
  private store: Firestore = inject(Firestore);
  private defaultListQueryArg: PaginatedQueryArgs<Variety> = { pageSize: 10, order: 'name', startAfterId: undefined };

  private collectionPath = 'varieties';

  async delete(id: string): Promise<void> {
    await deleteDoc(doc(this.store, this.collectionPath, id));
  }

  get(id: string): Observable<Variety | null> {
    return docData(doc(this.store, this.collectionPath, id)) as Observable<Variety | null>;
  }

  list(options: PaginatedQueryArgs<Variety> = this.defaultListQueryArg): Observable<Variety[]> {
    const {
      pageSize = 10,
      order = 'name',
      startAfterId,
    } = options;
    const varietysCollection = collection(this.store, this.collectionPath);
    let varietyQuery;
    if (startAfterId) {
      varietyQuery = query(varietysCollection, orderBy(order), startAfter(startAfterId), limit(pageSize));
    } else {
      varietyQuery = query(varietysCollection, orderBy(order), limit(pageSize));
    }
    return collectionData(varietyQuery) as Observable<Variety[]>;
  };

  async set(id: string, data: Partial<Variety>): Promise<void> {
    await setDoc(doc(this.store, this.collectionPath, id), { ...data });
  }
}
