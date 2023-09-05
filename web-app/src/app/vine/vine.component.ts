import { Component, Input } from '@angular/core';
import { Vine } from './vine.type';

@Component({
  selector: 'app-vine',
  templateUrl: './vine.component.html',
  styleUrls: ['./vine.component.scss']
})
export class VineComponent {
  expanded = false;
  @Input({ required: true }) item: Vine;
  editing:boolean = false;
  status: string = '';

  constructor() {}

  onClick() {
    this.expanded = !this.expanded
    console.log('expanding');
  }

  toggleEdit() {
    this.editing = !this.editing;
    this.expanded = !this.expanded;
  }
}
