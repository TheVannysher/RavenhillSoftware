import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

import { Vine } from '#types/firebase/models/vine';
import { PaginatedQueryArgs } from '../types';

@Injectable({
  providedIn: 'root',
})
export class VineService {
  private store: Firestore = inject(Firestore);

  get(id: string, parentId: string) {
    return docData(doc(this.store, `fields/${parentId}/vines`, id)) as Observable<Vine>;
  }

  getAll(parentId: string) {
    return collectionData(collection(this.store, `fields/${parentId}/vines`)) as Observable<Vine[]>;
  }

  list(options: PaginatedQueryArgs<Vine>): Observable<Vine[]> {
    const {
      pageSize = 10,
      order = 'id',
      startAfterItem = undefined,
      parentId,
    } = options;
    if (!parentId) return of([]);
    const vinesCollection = collection(this.store, `fields/${parentId}/vines`);
    let VineQuery;
    if (startAfterItem) {
      VineQuery = query(vinesCollection, orderBy(order), startAfter(startAfterItem[order]), limit(pageSize));
    } else {
      VineQuery = query(vinesCollection, orderBy(order), limit(pageSize));
    }
    return collectionData(VineQuery) as Observable<Vine[]>;
  };

  async delete(id: string, parentId: string) {
    await deleteDoc(doc(this.store, `fields/${parentId}/vines`, id));
  }

  async set(id: string, parentId: string, data: Vine) {
    await setDoc(doc(this.store, `fields/${parentId}/vines`, id), { ...data });
  }

  async setAll(items: Vine[], parentId: string) {
    items.forEach(async (vine) => {
      await setDoc(doc(this.store, `fields/${parentId}/vines`, vine.id), { ...vine });
    });
  }
}
