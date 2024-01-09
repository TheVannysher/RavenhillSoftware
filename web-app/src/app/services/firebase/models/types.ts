import { Observable } from 'rxjs';

export interface Model<T> {
  get: (id: string) => Observable<T | null>,
  set: (id: string, data: Partial<T>) => Promise<void>,
  setBulk?: (ids: string[], data: Partial<T>) => Promise<void>,
  delete: (id: string) => Promise<void>,
}
