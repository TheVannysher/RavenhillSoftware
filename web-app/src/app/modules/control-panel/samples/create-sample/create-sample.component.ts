import { Component, OnInit, Input, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';

interface CreateSampleForm {
  brix: FormControl<number>,
  clusters: FormControl<number>,
  ph: FormControl<number>,
  postition: FormGroup<{
    row: FormControl<number>,
    vineNumber: FormControl<number>,
  }>
  id: string,
  ta: FormControl<number>,
  vine_id: FormControl<string>,
}

@Component({
  selector: 'app-create-sample',
  templateUrl: './create-sample.component.html',
  styleUrl: './create-sample.component.scss'
})
export class CreateSampleComponent implements OnInit {
  formBuilder: FormBuilder = inject(FormBuilder);
  form: FormGroup;

  @Input({ required: true }) id: string;

  ngOnInit() {
    this.form = this.formBuilder.group<CreateSampleForm>({
      brix: new FormControl(0, {
        nonNullable: true,
      }),
      clusters: new FormControl(0, {  nonNullable: true }),
      id: this.id || `sample_${uuid()}`,
      ph: new FormControl(0, {  nonNullable: true }),
      ta: new FormControl(0, {  nonNullable: true }),
      postition: new FormGroup({
        row: new FormControl(0, {  nonNullable: true }),
        vineNumber: new FormControl(0, {  nonNullable: true }),
      }),
      vine_id: new FormControl('', { nonNullable: true }),
    });
    console.log(this.form.value);
  }

  get brix() {
    return this.form.get('brix');
  }
  get clusters() {
    return this.form.get('clusters');
  }
  get ph() {
    return this.form.get('ph');
  }
  get row() {
    return this.form.get('postition.row');
  }
  get ta() {
    return this.form.get('ta');
  }
  get vineNumber() {
    return this.form.get('postition.vineNumber');
  }
  get vine_id() {
    return this.form.get('vine_id');
  }

}
