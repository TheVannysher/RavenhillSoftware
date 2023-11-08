import {
  Component, EventEmitter,
  inject, OnInit, Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import VarietyService from 'src/app/services/firebase/variety.service';
import { VarietyInput } from 'types/variety';

@Component({
  selector: 'app-create-and-update-variety',
  templateUrl: './create-and-update-variety.component.html',
  styleUrls: ['./create-and-update-variety.component.scss'],
})

export default class CreateAndUpdateVarietyComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);

  private vs: VarietyService = inject(VarietyService);

  formGroup: FormGroup;

  formData: VarietyInput;

  loading = false;

  icon = 'featherLogIn';

  @Output() handleSuccess: EventEmitter<void> = new EventEmitter();

  @Output() handleCancel: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      desc: ['', []],
    });
    this.formGroup.valueChanges.subscribe((value: VarietyInput) => {
      this.formData = value;
    });
  }

  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.loading = true;
    try {
      if (this.formData) {
        await this.vs.createOrUpdateVariety(this.formData);
        this.loading = false;
        this.icon = 'featherCheck';
        this.handleSuccess.emit();
      } else {
        throw new Error('no form data');
      }
    } catch (error) {
      this.loading = false;
      this.icon = 'featherX';
    }
  }

  handleOnCancel() {
    this.handleCancel.emit();
  }
}
