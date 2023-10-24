import { Component, Input } from '@angular/core';
import { Tag } from 'types/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export default class TagComponent {
  @Input() tag: Tag;
}
