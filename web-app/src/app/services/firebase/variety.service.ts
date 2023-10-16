import { Observable } from 'rxjs';
import { collection, doc, docData, Firestore, collectionData, DocumentReference } from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { Variety } from 'types/variety';

@Injectable({
  providedIn: 'root'
})
export class VarietyService {
  private collectionPath = 'varieties'
  store:Firestore = inject(Firestore);
  
  getVarietyById(id: string): Observable<Variety> {
    const docInstance = doc(this.store, `${this.collectionPath}/${id}`);
    return docData(docInstance) as Observable<Variety>;
  }

  getVarietyByReference(ref: DocumentReference): Observable<Variety> {
    return docData(ref) as Observable<Variety>;
  }

  getAllVariety(): Observable<Variety[]> {
    const collectionInstance = collection(this.store , this.collectionPath);
    return collectionData(collectionInstance) as Observable<Variety[]>; 
  }
}
