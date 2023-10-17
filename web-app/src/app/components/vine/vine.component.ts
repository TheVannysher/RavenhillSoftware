import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import VinesService from 'src/app/services/firebase/vines.service';
import { Vine } from 'src/types/vine';
import { Tag } from 'types/tag';
import { Variety } from 'types/variety';

import VarietyService from '../../services/firebase/variety.service';

@Component({
  selector: 'app-vine',
  templateUrl: './vine.component.html',
})
export default class VineComponent implements OnInit {
  expanded = false;

  @Input({ required: true }) item: Vine;

  editing = false;

  variety: Observable<Variety>;

  tags: Observable<Tag[] | null>;

  constructor(
    private vineService: VinesService,
    private varietyService: VarietyService,
  ) { }

  ngOnInit(): void {
    if (this.item) {
      this.variety = this.varietyService.getVarietyByReference(this.item.varietyRef);
      this.tags = this.vineService.getTagForVine(this.item);
    }
  }

  onClick() {
    this.expanded = !this.expanded;
  }

  toggleEdit() {
    this.editing = !this.editing;
    this.expanded = !this.expanded;
  }
}
