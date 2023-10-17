import { Output, EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export default class CardWrapperComponent {
  @Input({ required: false }) title: string;
  @Input({ required: false }) expandable: boolean;
  expanded: boolean = false;
  @Output() onExpanding: EventEmitter<boolean> = new EventEmitter();

  handleOnExpanding() {
    this.onExpanding.emit(this.expanded);
    this.expanded = !this.expanded;
  }
}
