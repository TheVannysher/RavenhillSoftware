import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteNames } from '#lib/enum/routes';
import { FieldService } from '#services/firebase/models/field/field.service';

@Component({
  selector: 'app-field-item',
  templateUrl: './field-item.component.html',
})
export class FieldItemComponent {
  fieldService: FieldService = inject(FieldService);

  router: Router = inject(Router);

  @Input({ required: true }) id: string;

  @Input({ required: true }) name: string;

  @Input({ required: true }) index: number;

  confirmModalOpened = false;

  editField() {
    this.router.navigate([`control-panel/${RouteNames.FIELD}/edit`, this.id]);
  }

  deleteField(id: string) {
    this.fieldService.delete(id);
  }
}
