import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss'],
})
export default class FormBaseComponent {
  @Input({ required: true }) formGroup: FormGroup;

  @Output() handleOnSuccess: EventEmitter<void> = new EventEmitter();

  @Output() handleOnError: EventEmitter<void> = new EventEmitter();

  @Input() handleOnSubmit: EventEmitter<void> = new EventEmitter();
}
