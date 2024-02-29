import { inject, Injectable } from '@angular/core';
import {
  collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Vine } from '#types/firebase/models/vine';

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
