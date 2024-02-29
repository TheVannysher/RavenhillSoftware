import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigator-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() active = false;

  @Input({ required: true }) name: string;

  @Input({ required: true }) path: string;

  @Input({ required: true }) icon: string;
}
