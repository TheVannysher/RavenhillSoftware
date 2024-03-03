import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
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
import { AddVinesSideEffectArgs } from '#modules/control-panel/vine/create-bulk-vine/create-bulk-vine.component';
import { BlockService } from '#services/firebase/models/block/block.service';
import { Subscription } from 'rxjs';
import { Field } from '#types/firebase/models/field';
import { Vine } from '#types/firebase/models/vine';

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
  field: Field = {
    id: `field_${uuid()}`,
    name: '',
    layout: {
      totalRows: 0,
      totalVines: 0,
      vinesByRow: {},
    },

  };

  ngOnInit(): void {
    this.getInitialFormValue();
    this.fieldForm = this.formBuilder.group({
      id: [this.field.id],
      name: [this.field.name, [Validators.required, Validators.pattern(/^[a-zA-Z0-9-_]+$/), Validators.maxLength(20)]],
      layout: [this.field.layout],
      updatedAt: [],
      blocks: new FormControl<Block[]>([]),
      vines: new FormControl<Vine[]>([]),
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
    if (this.fieldSubscription) this.fieldSubscription.unsubscribe();
    if (this.vinesSubscription) this.vinesSubscription.unsubscribe();
    if (this.blocksSubscription) this.blocksSubscription.unsubscribe();
  }

  getInitialFormValue() {
    this.routeParamsSubscription = this.route.params.subscribe(({ id }) => {
      if (id) {
        this.field.id = id;
        this.fieldSubscription = this.fieldService.get(id).subscribe((field) => {
          if (field) {
            this.fieldForm.setValue({
              ...this.fieldForm.value,
              ...field,
            });
            this.field = field;
            this.blocksSubscription = this.blockService.getAll(id).subscribe((blocks) => {
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

  addVineBulkSideEffect({ formValue, vinesByRow }: AddVinesSideEffectArgs) {
    const { variety } = formValue;
    const alreadyExist = this.fieldForm.value.blocks.map((block: Block) => block.name).includes(variety.name);
    if (!alreadyExist) {
      const newBlock: Block = {
        id: `block_${variety.id}`,
        name: variety.name,
        average: {
          ta: 0,
          ph: 0,
          brix: 0,
          cluster_quantity: formValue.clusters,
        },
        sample_quantity: 0,
        vine_quantity: formValue.quantity,
      }
      this.fieldForm.setValue({
        ...this.fieldForm.value,
        blocks: [
          ...this.fieldForm.value.blocks,
          newBlock,
        ],
      })
    } else {
      const blocks = this.fieldForm.value.blocks.map((block: Block) => {
        if (block.name === variety.name) {
          const vq = block.vine_quantity;
          const cq = block.average.cluster_quantity;
          const nvq  = formValue.quantity;
          const ncq = formValue.clusters;
          block.average.cluster_quantity += (vq * cq + ncq * nvq) / vq + nvq;
          block.vine_quantity += formValue.quantity;
        }
        return block;
      });
      this.fieldForm.setValue({
        ...this.fieldForm.value,
        blocks,
      })
    }
    Object.entries(vinesByRow).forEach(([row, quantity]: [string, number]) => {
      const { layout } = this.field;
      this.field.layout.vinesByRow[parseInt(row)] = quantity + (layout.vinesByRow[parseInt(row)] || 0);
    });
  }

  back($event: MouseEvent) {
    $event.preventDefault();
    this.navigation.back();
  }

  async submit() {
    this.submitting = true;
    const { blocks, id, name, vines } = this.fieldForm.value;
    const fieldId = id || this.field.id;
    if (this.fieldForm.valid) {
      this.field.layout.totalVines = Object.entries(this.field.layout.vinesByRow).reduce((acc, [_, quantity]) => acc + quantity, 0);
      this.field.layout.totalRows = Object.keys(this.field.layout.vinesByRow).length;
      this.fieldService.set(fieldId, {
        ...this.field,
        id,
        name,
      });
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
