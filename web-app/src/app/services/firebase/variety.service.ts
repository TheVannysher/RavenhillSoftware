import { inject, Injectable } from '@angular/core';
import {
  collection, collectionData, doc, docData, DocumentReference, Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Variety } from 'types/variety';

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
}
