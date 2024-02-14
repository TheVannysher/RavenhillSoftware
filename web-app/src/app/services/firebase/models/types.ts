import { DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export type ListOptions = {
  itemByPage: number,
  order: string,

};

export interface Model<T> {
  get?: (id: string,) => Observable<T | null>;
  getAll?: (id: string) => Observable<T[] | null>;
  list?: ModelListFunction<T>;
  set?: (id: string, data: Partial<T>) => Promise<void>;
  setBulk?: (ids: string[], data: Partial<T>) => Promise<void>;
  delete?: (id: string) => Promise<void>;
}

type ModelListFunction<T> =
  ((pageSize?: number, order?: keyof T, startAfterId?: string) => Observable<T[]>)
  | ((parentId?: string, pageSize?: number, order?: keyof T, startAfterId?: string) => Observable<T[]>);
