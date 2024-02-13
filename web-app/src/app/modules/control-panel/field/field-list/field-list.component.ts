import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  DocumentSnapshot,
} from '@angular/fire/firestore';
import { Observable, of, Subscription } from 'rxjs';
import { NGIcons } from 'src/app/icons';

import { HeaderInfo } from '#components/page-wrapper/page-wrapper.component';
import { FieldService } from '#services/firebase/models/field/field.service';
import { Field } from '#types/firebase/models/field';
import { RouteIconTypes } from '#types/navigation/routes.types';

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
    this.dataSubscription = this.fieldService.listAll().subscribe((data) => { this.data = data; });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
