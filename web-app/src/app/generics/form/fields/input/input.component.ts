import {
  Component,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export default class InputComponent {
  @Input({ required: true }) controlName: string;

  @Input() value?: string = '';

  @Input() placeholder?: string = '';

  @Input({ required: true }) lable = 'label';

  @Input() type?: string = 'text';

  @Input({ required: true }) formGroup: FormGroup;

  invalid = false;

  focused = false;

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
