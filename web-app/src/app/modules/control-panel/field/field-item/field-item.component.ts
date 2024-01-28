import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteNames } from '#lib/enum/routes';

@Component({
  selector: 'app-field-item',
  templateUrl: './field-item.component.html',
})
export class FieldItemComponent {
  router: Router = inject(Router);

  @Input({ required: true }) id: string;

  @Input({ required: true }) name: string;

  editField() {
    this.router.navigate([`control-panel/${RouteNames.FIELD_MANAGEMENT}/edit`, this.id]);
  }

  // eslint-disable-next-line class-methods-use-this
  deleteField() {
    console.log('do nothing for now');
  }
}
