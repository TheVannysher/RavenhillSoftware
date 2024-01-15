import { Component, inject, OnInit } from '@angular/core';
import {
  DocumentSnapshot,
} from '@angular/fire/firestore';
import { map } from 'rxjs';
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
export class FieldListComponent implements OnInit {
  fieldService: FieldService = inject(FieldService);

  data: Field[] = [];

  pageNumber = 1;

  lastDocument: DocumentSnapshot;

  loading = true;

  headerInfo: HeaderInfo = {
    title: 'Fields',
    category: 'Control-Panel',
    color: '--clr-green-500',
    icon: {
      src: NGIcons.feather.Feather,
      type: RouteIconTypes.NG_ICON,
    },
  };

  ngOnInit(): void {
    this.loading = true;
    this.fieldService.list({
      order: 'id',
      itemByPage: 10,
    }).first().pipe(map((fields) => {
      this.data = fields;
      // this.lastDocument = fields[fields.length - 1],
    }));
    this.loading = false;
  }

  next() {
    if (this.lastDocument) {
      this.pageNumber += 1;
      this.loading = true;
      // this.fieldService.list({
      //   order: 'id',
      //   itemByPage: 10,
      // }).next();
    }
  }
}
