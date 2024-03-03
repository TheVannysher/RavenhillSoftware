import { Observable } from 'rxjs';

export type ListOptions = {
  itemByPage: number,
  order: string,

};

export interface Model<T> {
  get?: (id: string, parentId?: string) => Observable<T | null>;
  getAll?: (id: string) => Observable<T[] | null>;
  list?: (options?: PaginatedQueryArgs<T>) => Observable<T[]>;
  set?: (id: string, data: Partial<T>) => Promise<void>;
  setBulk?: (ids: string[], data: Partial<T>) => Promise<void>;
  delete?: (id: string) => Promise<void>;
}

export type PaginatedQueryArgs<T> = { parentId?: string, pageSize?: number, order?: (keyof T)[], startAfterItem?: T }