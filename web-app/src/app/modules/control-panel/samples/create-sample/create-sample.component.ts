import { PositiveNumberRegExp } from '#lib/validator/patterns';
import { BlockService } from '#services/firebase/models/block/block.service';
import { FieldService } from '#services/firebase/models/field/field.service';
import { NavigationService } from '#services/navigation/navigation.service';
import { Block } from '#types/firebase/models/block';
import { Field } from '#types/firebase/models/field';
import { Component, OnInit, Input, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuid } from 'uuid';

interface CreateSampleForm {
  brix: FormControl<number>,
  clusters: FormControl<number>,
  ph: FormControl<number>,
  position: FormGroup<{
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
  navigate: NavigationService = inject(NavigationService);
  formBuilder: FormBuilder = inject(FormBuilder);
  form: FormGroup;
  route: ActivatedRoute = inject(ActivatedRoute);
  blockService: BlockService = inject(BlockService);
  fieldService: FieldService = inject(FieldService);
  block: Block;
  field: Field;

  @Input({ required: true }) id: string;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const { block_id, field_id } = params;
      if (block_id && field_id) {
        this.blockService.get(block_id, field_id).subscribe((block) => {
          if (block) {
            this.form.patchValue(block);
            this.block = block;
          }
        });
        this.fieldService.get(field_id).subscribe((field) => {
          if (field) {
            this.field = field;
          }
        });
      }
    });
    this.form = this.formBuilder.group<CreateSampleForm>({
      brix: new FormControl(0, {
        nonNullable: true,
      }),
      clusters: new FormControl(0, {  nonNullable: true }),
      id: this.id || `sample_${uuid()}`,
      ph: new FormControl(0, {  nonNullable: true }),
      ta: new FormControl(0, {  nonNullable: true }),
      position: new FormGroup({
        row: new FormControl(0, { 
          nonNullable: true,
          validators: [
            Validators.pattern(PositiveNumberRegExp),
            Validators.min(1),
          ],
      }),
        vineNumber: new FormControl(0, {  nonNullable: true }),
      }),
      vine_id: new FormControl('', { nonNullable: true }),
    });
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  submit() {
    
  }

  back(event: MouseEvent) {
    event.preventDefault();
    this.navigate.back();
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
  get position() {
    return this.form.get('position');
  }
  get row() {
    return this.form.get('position.row');
  }
  get ta() {
    return this.form.get('ta');
  }
  get vineNumber() {
    return this.form.get('position.vineNumber');
  }
  get vine_id() {
    return this.form.get('vine_id');
  }

}
