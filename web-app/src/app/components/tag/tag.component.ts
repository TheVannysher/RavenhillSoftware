import { Component, Input, OnInit } from '@angular/core';

const red = '#ff0000';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() color?: string;
  @Input() title: string | null;
  @Input() icon?: string;
}
