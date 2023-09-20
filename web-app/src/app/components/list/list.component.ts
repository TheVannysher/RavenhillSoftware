import { Firestore, collectionData, getDocs } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Component, inject, OnInit } from '@angular/core';
import { Vine, VineRow } from 'types/vine';
import { map, Observable, reduce } from 'rxjs';
import { VinesService } from 'src/app/services/firebase/vines.service';

@Component({
  selector: 'app-vines-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class VinesListComponent implements OnInit{

  rowList: Observable<VineRow[]>;
  modalOpen: boolean = false;

  constructor(
    private vineService: VinesService
  ) {
    this.rowList = vineService.getAllByRow();
  }

  ngOnInit(): void {
  }

  toggleCreateVineModal() {
    this.modalOpen = !this.modalOpen;
  }

  handleAddVine(fields: any) {
  }
}
