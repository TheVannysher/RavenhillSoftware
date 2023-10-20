import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Tag } from '../../../types/tag';

@Component({
  selector: 'app-tag-section',
  templateUrl: './tag-section.component.html',
})
export default class TagSectionComponent {
  @Input() tags: Observable<Tag[] | null>;
}
