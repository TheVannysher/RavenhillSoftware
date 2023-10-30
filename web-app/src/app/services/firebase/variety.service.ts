import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  DocumentReference,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  async createVariety(newValue: VarietyInput) {
    const collectionRef = collection(this.store, this.collectionPath);
    const id = newValue.name?.substring(0, 4).toUpperCase();
    try {
      await setDoc(doc(collectionRef, id), { ...newValue });
    } catch (error) {
      console.error('Failed to add new Variety');
    }
  }

  async updateVariety(id: string, newValue: VarietyInput) {
    const documentRef = doc(this.store, `${this.collectionPath}/${id}`);
    console.log('documentREf: ', documentRef);

    // try {
    //   await setDoc(documentRef, { ...newValue });
    // } catch (error) {
    //   console.error('Failed to add new Variety');
    // }
  }
}
