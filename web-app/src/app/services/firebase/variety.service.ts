import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  DocumentReference,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { firstValueFrom, Observable } from 'rxjs';
import { Variety, VarietyInput } from 'types/variety';

@Injectable({
  providedIn: 'root',
})
export default class VarietyService {
  private collectionPath = 'varieties';

  store: Firestore = inject(Firestore);

  getVarietyById(id: string): Observable<Variety> {
    const docInstance = doc(this.store, `${this.collectionPath}/${id}`);
    return docData(docInstance) as Observable<Variety>;
  }

  // eslint-disable-next-line class-methods-use-this
  getVarietyByReference(ref: DocumentReference): Observable<Variety> {
    return docData(ref) as Observable<Variety>;
  }

  getAllVariety(): Observable<Variety[]> {
    const collectionInstance = collection(this.store, this.collectionPath);
    return collectionData(collectionInstance) as Observable<Variety[]>;
  }

  async createOrUpdateVariety(newValue: VarietyInput) {
    const collectionRef = collection(this.store, this.collectionPath);
    const id = newValue.name?.replace(/\s/g, '').substring(0, 5).toUpperCase();
    try {
      const docRef = doc(collectionRef, id);
      const exist = await firstValueFrom(docData(docRef));
      if (exist) {
        await updateDoc(docRef, { ...newValue });
      } else {
        await setDoc(docRef, { ...newValue });
      }
      return 'success';
    } catch (error) {
      console.error('Failed to add new Variety');
      return 'error';
    }
  }
}
