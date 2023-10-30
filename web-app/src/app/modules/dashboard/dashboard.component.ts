import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import VinesService from 'src/app/services/firebase/vines.service';
import { VineRow } from 'types/vine';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent implements OnInit {
  rowList: Observable<VineRow[]>;

  openedModal = 'none';

  constructor(
    private vinesService: VinesService,
  ) {

  }

  ngOnInit(): void {
    this.rowList = this.vinesService.getAllByRow();
  }

  openModal(modalToOpen: string) {
    this.openedModal = modalToOpen;
    console.log('openedModal: ', this.openedModal);
  }

  closeModal() {
    this.openedModal = 'none';
  }
}
