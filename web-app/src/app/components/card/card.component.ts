import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export default class CardComponent {
  @Input({ required: false }) expandable = false;

  @Input({ required: false }) expanded = false;

  @Output() handleClick: EventEmitter<void> = new EventEmitter();

  handleOnClick() {
    this.handleClick.emit();
  }
}
