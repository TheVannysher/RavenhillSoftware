import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export default class InputComponent {
  @Input({ required: true }) controlName: string;
  @Input() value?: string = '';
  @Input() placeholder?: string = '';
  @Input({ required: true }) lable: string = 'label';
  @Input() type?: string = 'text';
  @Input({ required: true }) formGroup: FormGroup;
  invalid: boolean = false;
  focused: boolean = false;

  get formControlStatus() {
    return this.formGroup.get(this.controlName)!;
  }

  handleOnFocus() {
    this.focused = true;
  }

  handleOnBlur() {
    this.focused = false;
  }
}
