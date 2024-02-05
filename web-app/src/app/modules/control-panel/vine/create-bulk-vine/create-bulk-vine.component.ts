import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { Variety, Vine } from '#types/firebase/models/vine';

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

  @Input() value: Vine[] = [];

  @Output() valueChange = new EventEmitter<Vine[]>();

  VIGOR_LIST = [
    'low',
    'medium',
    'high',
    'dead',
  ];

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      quantity: [null, [Validators.required, Validators.pattern(/^[1-9]+$/g)]],
      variety: [null, [Validators.required]],
      clusters: [0, [Validators.pattern(/^[0-9]+$/g)]],
      vigor: [null, [Validators.required]],
    });
    this.varieties = collectionData(collection(this.store, 'varieties')) as Observable<Variety[]>;
  }

  addVines() {
    const {
      clusters,
      variety,
      quantity,
      vigor,
    } = this.formGroup.value;
    const addedVines = Array.from({ length: +quantity }).map(() => ({
      id: `vine_${uuid()}`,
      field_id: this.parentId,
      block_id: `block_${variety.id}`,
      clusters,
      variety,
      vigor,
    }));
    this.value = [
      ...this.value,
      ...addedVines,
    ].sort((a, b) => (a.variety.name > b.variety.name ? 1 : -1));
    this.valueChange.emit(this.value);
  }

  get quantity() {
    return this.formGroup.controls['quantity'];
  }

  get clusters() {
    return this.formGroup.controls['clusters'];
  }

  get variety() {
    return this.formGroup.controls['variety'];
  }

  get vigor() {
    return this.formGroup.controls['vigor'];
  }
}
