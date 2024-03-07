import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
import { Block } from '#types/firebase/models/block';
import { Vine } from '#types/firebase/models/vine';
import { BulkVineFormValue } from '#modules/control-panel/vine/create-bulk-vine/create-bulk-vine.component';
import { BlockService } from '#services/firebase/models/block/block.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-or-create-field',
  templateUrl: './edit-or-create-field.component.html',
})
export class EditOrCreateFieldComponent implements OnInit, OnDestroy {
  navigation: NavigationService = inject(NavigationService);
  fieldService: FieldService = inject(FieldService);
  blockService: BlockService = inject(BlockService);
  vineService: VineService = inject(VineService);
  route: ActivatedRoute = inject(ActivatedRoute);
  formBuilder: FormBuilder = inject(FormBuilder);

  private routeParamsSubscription: Subscription;
  private fieldSubscription: Subscription;
  private vinesSubscription: Subscription;
  private blocksSubscription: Subscription;

  fieldForm: FormGroup;
  errors: ValidationErrors | null = null;
  submitting = false;
  id = `field_${uuid()}`;

  constructor() {
    this.fieldForm = this.formBuilder.group({
      id: [this.id],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-_]+$/), Validators.maxLength(20)]],
      updatedAt: [],
      blocks: [[]],
      vines: [[]],
    });
  }

  ngOnInit(): void {
    this.getInitialFormValue();
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
    if (this.fieldSubscription) this.fieldSubscription.unsubscribe();
    if (this.vinesSubscription) this.vinesSubscription.unsubscribe();
    if (this.blocksSubscription) this.blocksSubscription.unsubscribe();
  }

  getInitialFormValue() {
    this.routeParamsSubscription = this.route.params.subscribe(({ id }) => {
      this.id = id;
      if (id) {
        this.fieldSubscription = this.fieldService.get(this.id).subscribe((field) => {
          if (field) {
            // this.vinesSubscription = this.vineService.getAll(this.id).subscribe((vines) => {
            //   this.fieldForm.setValue({
            //     ...this.fieldForm.value,
            //     vines,
            //   });
            // });
            this.blocksSubscription = this.blockService.getAll(this.id).subscribe((blocks) => {
              this.fieldForm.setValue({
                ...this.fieldForm.value,
                blocks,
              })
            });
            this.fieldForm.setValue({
              ...this.fieldForm.value,
              ...field,
            });
          }
        });
      }
    });
  }

  addVineBulkSideEffect(value: BulkVineFormValue) {
    const { variety } = value;
    const alreadyExist = this.fieldForm.value.blocks.map((block: Block) => block.name).includes(variety.name);
    if (!alreadyExist) {
      const newBlock: Block = {
        id: `block_${variety.id}`,
        name: variety.name,
        average: {
          ta: 0,
          ph: 0,
          brix: 0,
        },
      }
      this.fieldForm.setValue({
        ...this.fieldForm.value,
        blocks: [
          ...this.fieldForm.value.blocks,
          newBlock,
        ],
      })
    }
  }

  back() {
    this.navigation.back();
  }

  async submit() {
    this.submitting = true;
    const { blocks, id, name, vines } = this.fieldForm.value;
    const fieldId = id || `field_${uuid()}`;
    if (this.fieldForm.valid) {
      this.fieldService.set(fieldId, { id, name });
      this.vineService.setAll(vines, fieldId);
      this.blockService.setAll(blocks, fieldId);
    }
    this.submitting = false;
    this.navigation.navigate(RouteFullPaths.CONTROL_PANEL);
  }

  get Id() {
    return this.fieldForm.value.id;
  }

  get nameControl() {
    return this.fieldForm.controls['name'];
  }
}
