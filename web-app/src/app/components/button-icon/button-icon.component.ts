import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {
  @Input() name: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  handleOnClick() {
    this.onClick.emit();
  }
}
