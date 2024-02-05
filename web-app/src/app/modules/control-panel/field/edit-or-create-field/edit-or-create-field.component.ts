import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuid } from 'uuid';

import { RouteFullPaths } from '#lib/enum/routes';
import { FieldService } from '#services/firebase/models/field/field.service';
import { VineService } from '#services/firebase/models/vine/vine.service';
import { NavigationService } from '#services/navigation/navigation.service';
import { Vine } from '#types/firebase/models/vine';

@Component({
  selector: 'app-edit-or-create-field',
  templateUrl: './edit-or-create-field.component.html',
})
export class EditOrCreateFieldComponent implements OnInit {
  navigation: NavigationService = inject(NavigationService);

  fieldService: FieldService = inject(FieldService);

  vineService: VineService = inject(VineService);

  route: ActivatedRoute = inject(ActivatedRoute);

  formBuilder: FormBuilder = inject(FormBuilder);

  fieldForm: FormGroup;

  vines: Vine[] = [];

  errors: ValidationErrors | null = null;

  submitting = false;

  loading = true;

  id = `field_${uuid()}`;

  ngOnInit(): void {
    this.fieldForm = this.formBuilder.group({
      id: [`field_${uuid()}`],
      name: ['', [Validators.required]],
      updatedAt: [],
      vines: [[]],
    });
    this.getInitialFormValue();
  }

  getInitialFormValue() {
    this.loading = true;
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      if (id) {
        this.fieldService.get(id).subscribe((field) => {
          console.log('id: ', id);
          console.log('field: ', field);
          if (field) {
            this.fieldForm.setValue({
              ...this.fieldForm.value,
              ...field,
            });
            this.vineService.getAll(id).subscribe((vines) => {
              this.fieldForm.setValue({
                ...this.fieldForm.value,
                vines,
              });
            });
          }
        });
      }
      this.loading = false;
    });
  }

  back() {
    this.navigation.back();
  }

  async submit() {
    this.submitting = true;
    const { id, vines } = this.fieldForm.value;
    const fieldId = id || `field_${uuid()}`;
    if (this.fieldForm.valid) {
      this.fieldService.set(fieldId, { ...this.fieldForm.value });
      this.vineService.setAll(vines, fieldId);
    }
    this.submitting = false;
    this.navigation.navigate(RouteFullPaths.CONTROL_PANEL);
  }

  get Id() {
    return this.fieldForm.value.id;
  }
}
