import { ListColumnStruct } from '#components/list/list.component';
import { VarietyService } from '#services/firebase/models/variety/variety.service';
import { Variety } from '#types/firebase/models/vine';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-variety-list',
  templateUrl: './variety-list.component.html',
  styleUrl: './variety-list.component.scss'
})
export class VarietyListComponent implements OnInit {
  varietyService: VarietyService = inject(VarietyService);
  varieties: Variety[] = [];
  keys: ListColumnStruct<Variety>[] = [
    {
      key: 'name',
      colName: 'Name',
    },
  ]

  ngOnInit(): void {
    this.varietyService.list().subscribe((varieties: Variety[]) => {
      this.varieties = varieties;
    })
  }
}
