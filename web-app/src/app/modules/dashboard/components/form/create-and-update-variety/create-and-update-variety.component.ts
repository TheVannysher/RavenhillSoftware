import { Component, inject, OnInit } from '@angular/core';
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

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.loading = true;
    console.log('FormData: ', this.formData);
    this.vs.createVariety(this.formData);
    this.loading = false;
  }
}
