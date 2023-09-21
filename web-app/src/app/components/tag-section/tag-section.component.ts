import { Observable } from 'rxjs';
import { Tag } from '../../../types/tag';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-section',
  templateUrl: './tag-section.component.html',
  styleUrls: ['./tag-section.component.scss']
})
export class TagSectionComponent {
  @Input() tags: Observable<Tag[]>;
}
