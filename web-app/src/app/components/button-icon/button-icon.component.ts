import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent {
  @Input({ required: true }) name: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter();
  @Input() label?: string;
  @Input() color?: string;
  @Input() bgColor?: string;
  @Input() hoverColor?: string;
  @Input() hoverBgColor?: string;
  @Input() iconSize?: number | string;
  @Input() disabled?: boolean;
  @Input() loading?: boolean;

  handleOnClick() {
    this.onClick.emit();
  }
}
