import { Component, Input } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string;
  @Input() formControlName: string;
  @Input() formGroup: FormGroup;
  @Input() required: string;
  @Input() value: string;
  errors: string;

}
