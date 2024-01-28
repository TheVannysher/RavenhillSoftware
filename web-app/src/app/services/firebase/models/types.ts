import { DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export type ListOptions = {
  itemByPage: number,
  order: string,

};

export interface Model<T> {
  get: (id: string) => Observable<T | null>,
  list: (options: ListOptions) => ListQueryReturn<T>,
  set: (id: string, data: Partial<T>) => Promise<void>,
  setBulk?: (ids: string[], data: Partial<T>) => Promise<void>,
  delete: (id: string) => Promise<void>,
}

export type ListQueryReturn<T> = {
  first: () => Observable<T[] | null>,
  next: (lastDocument: DocumentSnapshot) => Observable<T[] | null>,
};
