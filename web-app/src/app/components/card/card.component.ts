import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export default class CardComponent {
  @Input({ required: false }) expandable: boolean = false;
  @Input({ required: false }) expanded: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  handleOnClick() {
    this.onClick.emit();
  }
}
