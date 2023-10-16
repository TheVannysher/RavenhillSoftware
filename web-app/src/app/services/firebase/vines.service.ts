import { TasksService } from 'src/app/services/firebase/tasks.service';
import { map, Observable, of } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { collection, Firestore, collectionData, doc, docData } from '@angular/fire/firestore';
import { Vine, VineRow } from 'src/types/vine';
import { Tag } from 'types/tag';
import { Task } from 'types/task';
import { VINE_BAGDES } from 'src/lib/enum/tags';

@Injectable({
  providedIn: 'root'
})
export class VinesService {
  private collectionPath = "vines";
  private taskService = inject(TasksService);
  store: Firestore = inject(Firestore);

  getVineById(id: string): Observable<Vine> {
    const document = doc(this.store, `${this.collectionPath}/${id}`)
    return docData(document, {
      idField: 'id',
    }) as Observable<Vine>;
  }

  getAllByRow(): Observable<VineRow[]> {
    const instance = collection(this.store, this.collectionPath);
    const ob = collectionData(instance, { idField: 'id' }) as Observable<Vine[]>;
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

  getTagForVine(vine: Vine): Observable<Tag[] | null> {
    console.log('id: ', vine.lastMaintenance);
    const docRef = doc(this.store, `${this.collectionPath}/${vine.lastMaintenance}`);
    if (vine.lastMaintenance) {
      const ob = this.taskService.getById(vine.lastMaintenance);
      const res = ob.pipe(
        map((doc) => {
          const taskEnd = doc.periode.end.toDate()
          const taskStart = doc.periode.start.toDate()
          const today = new Date();
          let tags:Tag[] = []
          if (taskEnd > today && taskStart < today) {
            tags.push(VINE_BAGDES['maintenance']);
          }
          return tags;
        })
      )
      return res;
    }
    return of(null);
  }
}
