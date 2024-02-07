import { inject, Injectable } from '@angular/core';
import {
  collection, collectionData, doc, docData, Firestore, setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Block } from '#types/firebase/models/block';

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  private store: Firestore = inject(Firestore);

  get(id: string, parentId: string) {
    return docData(doc(this.store, `fields/${parentId}/blocks`, id)) as Observable<Block>;
  }

  getAll(parentId: string) {
    return collectionData(collection(this.store, `fields/${parentId}/blocks`)) as Observable<Block[]>;
  }

  async set(id: string, parentId: string, data: Block) {
    await setDoc(doc(this.store, `fields/${parentId}/blocks`, id), { ...data });
  }

  async setAll(items: Block[], parentId: string) {
    items.forEach(async (block) => {
      await setDoc(doc(this.store, `fields/${parentId}/blocks`, block.id), { ...block });
    });
  }
}
