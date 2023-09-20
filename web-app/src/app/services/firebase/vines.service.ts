import { map, Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { collection, Firestore, collectionData } from '@angular/fire/firestore';
import { Vine, VineRow } from 'types/vine';

@Injectable({
  providedIn: 'root'
})
export class VinesService {
  private collectionPath = "vines";
  store: Firestore = inject(Firestore);
  getAllByRow(): Observable<VineRow[]> {
    const instance = collection(this.store, this.collectionPath);
    const ob = collectionData(instance) as Observable<Vine[]>;
    return ob.pipe(
      map<Vine[], VineRow[]>((list) => {
        const newValues = list.reduce<Record<string, VineRow>>((acc, current) => {
          const n = acc;
          if (n[current.row]) {
            n[current.row] = {
              ...n[current.row],
              vineList : [...n[current.row].vineList , current]
            };
          } else {
            const newValue = {
              rowNumber: current.row,
              vineList: [current],
            }
            n[current.row] = newValue
          }
          return n;
        }, {});
        return Object.values(newValues);
      })
     )
  }
}
