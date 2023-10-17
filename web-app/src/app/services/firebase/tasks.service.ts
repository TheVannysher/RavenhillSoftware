import { VINE_BAGDES } from './../../../lib/enum/tags';
import { Task } from 'src/types/task';
import { map, Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { doc, docData, DocumentReference, Firestore } from '@angular/fire/firestore';
import { Tag } from 'types/tag';

@Injectable({
  providedIn: 'root'
})
export default class TasksService {
  private collectionPath = 'tasks'
  store: Firestore = inject(Firestore);
  constructor() { }

  getById(id: string): Observable<Task> {
    const docRef = doc(this.store, id);
    return docData(docRef) as Observable<Task>;
  }

  getTagForTask(id: string): Observable<Tag[]> {
    const docRef = doc(this.store, `${this.collectionPath}/${id}`);
    const ob = docData(docRef) as Observable<Task>;
    const res = ob.pipe(
      map((doc) => {
        const taskEnd = doc.periode.end.toDate()
        const taskStart = doc.periode.start.toDate()
        const today = new Date();
        let tags: Tag[] = []
        if (taskEnd > today && taskStart < today) {
          tags.push(VINE_BAGDES['maintenance']);
        }
        return tags;
      })
    )
    return res;
  }
}
