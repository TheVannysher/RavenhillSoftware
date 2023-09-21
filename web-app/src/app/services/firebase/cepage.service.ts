import { Observable } from 'rxjs';
import { collection, doc, docData, Firestore, collectionData } from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { Cepage } from 'types/cepage';

@Injectable({
  providedIn: 'root'
})
export class CepageService {
  private collectionPath = 'cepages'
  store:Firestore = inject(Firestore);
  
  getCepage(id: string): Observable<Cepage> {
    const docInstance = doc(this.store, `${this.collectionPath}/${id}`);
    return docData(docInstance) as Observable<Cepage>;
  }

  getAllCepage(): Observable<Cepage[]> {
    const collectionInstance = collection(this.store , this.collectionPath);
    return collectionData(collectionInstance) as Observable<Cepage[]>; 
  }
}
