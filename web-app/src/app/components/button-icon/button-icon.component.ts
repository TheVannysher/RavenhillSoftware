import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

const defaultColor = 'blue-500';
@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
})
export default class ButtonIconComponent {
  @Input({ required: true }) name: string;

  @Output() handleClick: EventEmitter<void> = new EventEmitter();

  @Input() label?: string;

  @Input() color = 'white';

  @Input() bgColor = defaultColor;

  @Input() hoverColor: string = defaultColor;

  @Input() hoverBgColor = 'white';

  @Input() iconSize?: number | string;

  @Input() disabled?: boolean;

  @Input() loading?: boolean;

  handleOnClick() {
    this.handleClick.emit();
  }
}
