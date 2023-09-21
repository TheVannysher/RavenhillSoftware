import { CepageService } from './../../services/firebase/cepage.service';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { TasksService } from 'src/app/services/firebase/tasks.service';
import { Vine } from 'src/types/vine'
import { Tag } from 'types/tag';
import { Cepage } from 'types/cepage';
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
  cepage: Observable<Cepage>;
  tags: Observable<Tag[]>;

  constructor(
    private taskService: TasksService,
    private cepageService: CepageService
  ) {
    this.tags = taskService.getTagForTask("sfkzU0IAloHlGFw5bcEG");
  }

  ngOnInit():void {
    if (this.item) {
      this.cepage = this.cepageService.getCepage(this.item.cepageId);
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
