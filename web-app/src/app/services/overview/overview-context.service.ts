import { Field } from '#types/firebase/models/field';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface OverviewContextData {
  field?: Field;
}

const defaultContext: OverviewContextData = {
  field: undefined,
};

@Injectable({
  providedIn: 'root'
})
export class OverviewContextService {
  private _context: BehaviorSubject<OverviewContextData> = new BehaviorSubject<OverviewContextData>(defaultContext);
  context$ = this._context.asObservable();

  setField(field: Field): void {
    this._context.next({
      ...this._context.getValue(),
      field,
    });
  }
}
