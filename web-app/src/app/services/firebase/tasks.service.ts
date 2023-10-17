import { inject, Injectable } from '@angular/core';
import {
  doc, docData, Firestore,
} from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Task } from 'src/types/task';
import { Tag } from 'types/tag';

import VINE_BAGDES from '../../../lib/enum/tags';

@Injectable({
  providedIn: 'root',
})
export default class TasksService {
  private collectionPath = 'tasks';

  store: Firestore = inject(Firestore);

  getById(id: string): Observable<Task> {
    const docRef = doc(this.store, id);
    return docData(docRef) as Observable<Task>;
  }

  getTagForTask(id: string): Observable<Tag[]> {
    const docRef = doc(this.store, `${this.collectionPath}/${id}`);
    const ob = docData(docRef) as Observable<Task>;
    const res = ob.pipe(
      map((document) => {
        const taskEnd = document.periode.end.toDate();
        const taskStart = document.periode.start.toDate();
        const today = new Date();
        const tags: Tag[] = [];
        if (taskEnd > today && taskStart < today) {
          tags.push(VINE_BAGDES['maintenance']);
        }
        return tags;
      }),
    );
    return res;
  }
}
