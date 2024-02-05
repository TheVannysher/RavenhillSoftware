import { Component, Input } from '@angular/core';

import { Vine } from '#types/firebase/models/vine';

@Component({
  selector: 'app-vine-list',
  templateUrl: './vine-list.component.html',
  styleUrls: ['./vine-list.component.scss'],
})
export class VineListComponent {
  @Input({ required: true }) vines: Vine[] = [];
}
