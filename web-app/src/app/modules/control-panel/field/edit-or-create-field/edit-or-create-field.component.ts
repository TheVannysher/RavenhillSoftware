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
import { VarietyService } from '#services/firebase/models/variety/variety.service';
import { VineService } from '#services/firebase/models/vine/vine.service';
import { NavigationService } from '#services/navigation/navigation.service';
import { Block } from '#types/firebase/models/block';
import { Field } from '#types/firebase/models/field';
import { Variety, Vine, VineVigor } from '#types/firebase/models/vine';

interface EditOrCreateFieldFormData {
  field?: Field,
  blocks?: Block[]
  vines?: Vine[]
}

@Component({
  selector: 'app-edit-or-create-field',
  templateUrl: './edit-or-create-field.component.html',
})
export class EditOrCreateFieldComponent implements OnInit {
  navigation: NavigationService = inject(NavigationService);

  fieldService: FieldService = inject(FieldService);

  varietyService: VarietyService = inject(VarietyService);

  vineService: VineService = inject(VineService);

  route: ActivatedRoute = inject(ActivatedRoute);

  formBuilder: FormBuilder = inject(FormBuilder);

  fieldForm: FormGroup;

  formData: EditOrCreateFieldFormData;

  addVineDisable = true;

  errors: ValidationErrors | null = null;

  varieties: Variety[] = [];

  fieldData: Field;

  fieldVines: Vine[] = [];

  submitting = false;

  loading = true;

  ngOnInit(): void {
    this.getInitialFormValue();
    this.varietyService.list().first().subscribe((varieties) => {
      if (varieties) {
        this.varieties = varieties;
      }
    });
    const vineGroup = this.formBuilder.group({
      quantity: [null, [Validators.required, Validators.pattern(/[1-9]/)]],
      variety: [null, [Validators.required]],
      clusters: [0, [Validators.pattern(/[0-9]/)]],
      vigor: [VineVigor.MEDIUM, [Validators.required]],
    });
    vineGroup.valueChanges.subscribe(() => {
      this.addVineDisable = vineGroup.valid;
    });
    this.fieldForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      vine: vineGroup,
    });
    this.fieldForm.valueChanges.subscribe(() => {
      this.errors = this.fieldForm.errors;
    });
  }

  getInitialFormValue() {
    this.loading = true;
    this.route.params.subscribe(({ id }) => {
      if (id) {
        this.fieldService.get(id).subscribe((field) => {
          if (field) {
            this.formData.field = field;
          }
        });
      } else {
        this.formData = {
          blocks: [],
          field: {
            id: `field_${uuid()}`,
            name: '',
          },
          vines: [],
        };
      }
      this.loading = false;
    });
  }

  addVines(event: MouseEvent) {
    event.preventDefault();
    const {
      clusters,
      variety: varietyId,
      quantity,
      vigor,
    } = this.fieldForm.value.vine;
    const newData = this.formData.vines || [];
    const variety = this.varieties.find((v) => v.id === varietyId);
    const { field } = this.formData;
    if (variety && field) {
      Array.from({ length: +quantity }).forEach(() => newData.push({
        id: `vine_${uuid()}`,
        field_id: field.id,
        block_id: `block_${variety.id}`,
        clusters,
        variety,
        vigor,
      }));
    }
    this.formData.vines = newData;
  }

  back() {
    this.navigation.back();
  }

  async submit() {
    this.submitting = true;
    const { field, vines } = this.formData;
    if (this.fieldForm.valid && field) {
      this.fieldService.set(field.id, {
        ...field,
      });
      if (vines) {
        this.vineService.setAll(vines, field.id);
      }
    }
    this.submitting = false;
    this.navigation.navigate(RouteFullPaths.CONTROL_PANEL);
  }
}
