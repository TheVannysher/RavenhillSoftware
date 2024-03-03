import { Sample } from '#types/firebase/models/sample';
import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { PaginatedQueryArgs } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private store: Firestore = inject(Firestore);
  private collectionPath = 'samples';

  get(id: string, parentId?: string) {
    return docData(doc(this.store, `fields/${parentId}`, this.collectionPath, id)) as Observable<Sample>;
  }

  getAll(parentId: string) {
    return collectionData(collection(this.store, `fields/${parentId}`, this.collectionPath)) as Observable<Sample[]>;
  }

  list(options: PaginatedQueryArgs<Sample>): Observable<Sample[]> {
    const {
      pageSize = 10,
      order = ['id'],
      startAfterItem = undefined,
      parentId,
    } = options;
    if (!parentId) return of([]);
    const vinesCollection = collection(this.store, `fields/${parentId}`, this.collectionPath);
    const orders = order.map((key) => orderBy(key, 'asc'));
    let SampleQuery;
    if (startAfterItem) {
      const startAfterValues = order.map((key) => startAfterItem[key]);
      SampleQuery = query(vinesCollection, ...orders, startAfter(...startAfterValues), limit(pageSize));
    } else {
      SampleQuery = query(vinesCollection, ...orders, limit(pageSize));
    }
    return collectionData(SampleQuery) as Observable<Sample[]>;
  };

  async delete(id: string, parentId: string) {
    await deleteDoc(doc(this.store, `fields/${parentId}`, this.collectionPath, id));
  }

  async set(id: string, parentId: string, data: Sample) {
    await setDoc(doc(this.store, `fields/${parentId}`, this.collectionPath, id), { ...data });
  }

  async setAll(items: Sample[], parentId: string) {
    items.forEach(async (sample) => {
      await setDoc(doc(this.store, `fields/${parentId}`, this.collectionPath, sample.id), { ...sample });
    });
  }
}
