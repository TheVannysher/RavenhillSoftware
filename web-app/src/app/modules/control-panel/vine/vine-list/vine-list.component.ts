import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, inject } from '@angular/core';

import { Vine } from '#types/firebase/models/vine';
import { ModalService } from '#services/modal/modal.service';
import AuthService from '#services/firebase/auth/auth.service';
import { Subscription } from 'rxjs';
import { Roles } from '#lib/enum/roles';
import { VineService } from '#services/firebase/models/vine/vine.service';

@Component({
  selector: 'app-vine-list',
  templateUrl: './vine-list.component.html',
  styleUrls: ['./vine-list.component.scss'],
})
export class VineListComponent implements OnInit, OnDestroy {
  modalService: ModalService = inject(ModalService);
  authService: AuthService = inject(AuthService);
  vineService: VineService = inject(VineService);
  private vinesSubscription: Subscription;
  userRoles: Roles = Roles.DEFAULT;
  noMoreResults: boolean = false;
  pageSize: number = 10;

  @Input({ required: true }) vines: Vine[] = [];
  @Output() vinesChange: EventEmitter<Vine[]> = new EventEmitter<Vine[]>();
  loading: boolean = true;
  @Input({ required: true }) parentId: string;

  ngOnInit(): void {
    this.vinesSubscription = this.vineService.list({ parentId: this.parentId, pageSize: this.pageSize, order: ['row', 'vineNumber'] }).subscribe((vines) => {
      this.vines = vines;
      console.log('vines: ', vines);
      this.vinesChange.emit(vines);
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.vinesSubscription.unsubscribe();
  }

  openModal(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.modalService.openModal(id);
  }

  loadMore(event: MouseEvent) {
    event.preventDefault();
    if (this.vinesSubscription) this.vinesSubscription.unsubscribe();
    this.vinesSubscription = this.vineService.list({
      parentId: this.parentId,
      pageSize: this.pageSize,
      order: ['row', 'vineNumber'],
      startAfterItem: this.vines[this.vines.length - 1],
    }).subscribe((vines) => {
      console.log('vines: ', vines);
      const newVines = this.vines.concat(vines);
      this.noMoreResults = vines.length < 10;
      this.vines = newVines;
      this.vinesChange.emit(newVines);
    });
  }

  vineChange(vine: Vine, index: number) {
    this.vines[index] = vine;
    this.vinesChange.emit(this.vines);
  }
}
