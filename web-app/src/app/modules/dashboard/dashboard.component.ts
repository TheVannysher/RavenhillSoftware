import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { VinesService } from 'src/app/services/firebase/vines.service';
import { VineRow } from 'types/vine';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  rowList: Observable<VineRow[]>;
  openedModal: string = 'none';
  constructor(
    private vinesService: VinesService
  ){

  }
  ngOnInit(): void {
    this.rowList = this.vinesService.getAllByRow();
  }

  openModal(modalToOpen: string) {
    this.openedModal = modalToOpen;
  }
}
