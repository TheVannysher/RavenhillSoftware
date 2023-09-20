import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { TasksService } from 'src/app/services/firebase/tasks.service';
import { Vine } from 'types/vine'

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
  tag: Observable<string>;

  constructor(private taskService: TasksService) {
    this.tag = taskService.getTagForTask("sfkzU0IAloHlGFw5bcEG");
    console.log(this.tag);
  }

  onClick() {
    this.expanded = !this.expanded
  }

  toggleEdit() {
    this.editing = !this.editing;
    this.expanded = !this.expanded;
  }

  getBadges() {
    
  }
}
