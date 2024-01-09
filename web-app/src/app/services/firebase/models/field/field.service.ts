import { inject, Injectable } from '@angular/core';
import {
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Model } from '../types';
import { Field } from './types';

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

  async set(id: string, data: Partial<Field>) {
    await setDoc(doc(this.store, this.collectionPath, id), { ...data });
  }

  async delete(id: string) {
    await deleteDoc(doc(this.store, this.collectionPath, id));
  }
}
