import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
})
export default class CardWrapperComponent {
  @Input({ required: false }) title: string;

  @Input({ required: false }) expandable: boolean;

  expanded = false;

  @Output() handleExpanding: EventEmitter<boolean> = new EventEmitter();

  handleOnExpanding() {
    this.handleExpanding.emit(this.expanded);
    this.expanded = !this.expanded;
  }
}
