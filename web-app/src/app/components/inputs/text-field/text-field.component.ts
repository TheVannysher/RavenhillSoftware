import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  @Input() type = 'text';

  @Input() placeholder = '';

  @Input({ required: true }) formControlName: string;

  @Input({ required: true }) fg: FormGroup;

  @Input() required = 'false';

  errors: string;
}
