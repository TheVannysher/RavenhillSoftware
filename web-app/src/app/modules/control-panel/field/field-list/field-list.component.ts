import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FieldService } from '#services/firebase/models/field/field.service';
import { Field } from '#types/firebase/models/field';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss'],
})
export class FieldListComponent implements OnInit, OnDestroy {
  fieldService: FieldService = inject(FieldService);

  dataSubscription: Subscription;
  data: Field[] = [];

  ngOnInit(): void {
    this.dataSubscription = this.fieldService.getAll().subscribe((data) => { this.data = data; });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
