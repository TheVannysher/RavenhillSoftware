import { Task } from 'types/task';
import { map, Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { doc, docData, DocumentReference, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private collectionPath = 'tasks'
  store: Firestore = inject(Firestore);
  constructor() { }

  getById(id: string): Observable<Task> {
    const docRef = doc(this.store, id);
    return docData(docRef) as Observable<Task>;
  }

  getTagForTask(id: string): Observable<string> {
    const docRef = doc(this.store, `${this.collectionPath}/${id}`);
    const ob = docData(docRef) as Observable<Task>;
    const res = ob.pipe(
      map((doc) => {
        const taskEnd = new Date(doc.periode.end)
        const taskStart = new Date(doc.periode.start)
        const today = new Date();
        if (taskEnd > today && taskStart < today) {
          return 'in maintenance';
        }
        return '';
      })
    )
    return res;
  }
}
