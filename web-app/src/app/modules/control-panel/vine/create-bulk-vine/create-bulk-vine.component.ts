import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { Variety, Vine } from '#types/firebase/models/vine';
import { VIGOR_LIST } from '#lib/enum/vine';
import { Field, FieldLayout } from '#types/firebase/models/field';


export interface BulkVineFormValue {
  variety: Variety,
  row: number,
  quantity: number,
  clusters: number,
  vigor: string,
}

export interface AddVinesSideEffectArgs {
  formValue: BulkVineFormValue,
  vinesByRow: { [key: number]: number },
}
@Component({
  selector: 'app-create-bulk-vine',
  templateUrl: './create-bulk-vine.component.html',
  styleUrls: ['./create-bulk-vine.component.scss'],
})
export class CreateBulkVineComponent implements OnInit {
  formBuilder: FormBuilder = inject(FormBuilder);

  formGroup: FormGroup;

  store: Firestore = inject(Firestore);

  @Input({ required: true }) parentId: string;

  varieties: Observable<Variety[]> = of([]);

  @Input() fieldLayout: FieldLayout | null = null;

  @Input() value: Vine[] = [];

  @Output() valueChange = new EventEmitter<Vine[]>();

  @Output() valueChangeSideEffect = new EventEmitter<AddVinesSideEffectArgs>();

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      clusters: [0, [Validators.pattern(/^[0-9]+$/), Validators.min(0), Validators.max(40)]],
      row: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(1), Validators.max(60)]],
      quantity: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(1), Validators.max(60)]],
      variety: [null, [Validators.required]],
      vigor: [null, [Validators.required, Validators.pattern(new RegExp(Object.values(VIGOR_LIST).join('|')))]],
    });
    this.varieties = collectionData(collection(this.store, 'varieties')) as Observable<Variety[]>;
  }

  addVines() {
    const {
      clusters,
      row,
      variety,
      quantity,
      vigor,
    } = this.formGroup.value;
    const addedVines = Array.from({ length: +quantity }).map((_, index) => {
      const vineNumber = this.fieldLayout && this.fieldLayout.vinesByRow[row] ? this.fieldLayout.vinesByRow[row] + index + 1 : index + 1;
      return ({
        id: `vine_${row}_${vineNumber}_${uuid()}`,
        field_id: this.parentId,
        block_id: `block_${variety.id}`,
        row,
        vineNumber,
        clusters,
        variety,
        vigor,
      })
    });
    this.value = [
      ...this.value,
      ...addedVines,
    ].sort((a, b) => (a.variety.name > b.variety.name ? 1 : -1));
    this.valueChange.emit(this.value);
    this.valueChangeSideEffect.emit({
      formValue: this.formGroup.value,
      vinesByRow: {
        [row]: +quantity,
      },
    });
  }

  get quantity() {
    return this.formGroup.get('quantity');
  }

  get clusters() {
    return this.formGroup.get('clusters');
  }

  get variety() {
    return this.formGroup.get('variety');
  }

  get vigor() {
    return this.formGroup.get('vigor');
  }

  get row() {
    return this.formGroup.get('row');
  }
}
