import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ListColumnStruct<T>{
  key: keyof T,
  colName: string,
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent<TData = any> {
  @Input({ required: true }) data: TData[];
  @Input({ required: true }) keys: ListColumnStruct<TData>[] = [];
  @Output() onRowClick: EventEmitter<TData> = new EventEmitter();
  @Input() onLoadMore: () => void

  onClick(event:MouseEvent, row: TData) {
    event.preventDefault();
    event.stopPropagation();
    this.onRowClick.emit(row);
  }

  loadMore(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.onLoadMore();
  }
}
