import { Observable } from 'rxjs';
import { Tag } from 'types/tag';
import { Component, Input, OnInit } from '@angular/core';

const red = '#ff0000';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export default class TagComponent {
  @Input() tag: Tag;
}
