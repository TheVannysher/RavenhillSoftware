import { Component, OnInit } from '@angular/core';
import { Vine } from 'src/app/vine/vine.type';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-vines-list',
  templateUrl: './vines-list.component.html',
  styleUrls: ['./vines-list.component.scss']
})
export class VinesListComponent implements OnInit {
  vineList:Vine[] = [];

  ngOnInit(): void {
    this.vineList = [{ id: 'R1V1CA' }, { id: 'R1V2CA' }]
  }

  handleAddVine() {
    console.log('add')
  }
}
