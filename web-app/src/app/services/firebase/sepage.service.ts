import { Observable } from 'rxjs';
import { collection, doc, docData, Firestore, collectionData } from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { Sepage } from 'types/sepage';

@Injectable({
  providedIn: 'root'
})
export class SepageService {
  private collectionPath = 'cepages'
  store:Firestore = inject(Firestore);
  
  getSepage(id: string): Observable<Sepage> {
    const docInstance = doc(this.store, `${this.collectionPath}/${id}`);
    return docData(docInstance) as Observable<Sepage>;
  }

  getAllSepage(): Observable<Sepage[]> {
    const collectionInstance = collection(this.store , this.collectionPath);
    return collectionData(collectionInstance) as Observable<Sepage[]>; 
  }
}
