import { SepageService } from '../../services/firebase/sepage.service';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { TasksService } from 'src/app/services/firebase/tasks.service';
import { Vine } from 'src/types/vine'
import { Tag } from 'types/tag';
import { Sepage } from 'types/sepage';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-vine',
  templateUrl: './vine.component.html',
  styleUrls: ['./vine.component.scss']
})
export class VineComponent implements OnInit {
  expanded = false;
  @Input({ required: true }) item: Vine;
  editing:boolean = false;
  cepage: Observable<Sepage>;
  tags: Observable<Tag[]>;

  constructor(
    private taskService: TasksService,
    private cepageService: SepageService
  ) {
    this.tags = taskService.getTagForTask("sfkzU0IAloHlGFw5bcEG");
  }

  ngOnInit():void {
    if (this.item) {
      this.cepage = this.cepageService.getSepage(this.item.cepageId);
    }
  }

  onClick() {
    this.expanded = !this.expanded
  }

  toggleEdit() {
    this.editing = !this.editing;
    this.expanded = !this.expanded;
  }
}
