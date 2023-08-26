import { Component, OnInit } from '@angular/core';
import { Vine } from 'src/app/vine/vine.type';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-vines-list',
  templateUrl: './vines-list.component.html',
  styleUrls: ['./vines-list.component.scss']
})
export class VinesListComponent implements OnInit {
  list:Vine[] = [];

  ngOnInit(): void {
    this.list = [{ id: uuid() }, { id: uuid() }]
  }

  handleAddVine() {
    this.list = [...this.list, {
      id: uuid(),
    }]
  }
}
