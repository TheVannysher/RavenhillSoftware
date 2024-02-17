import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';

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
  private userRolesSubscription: Subscription;
  private vinesSubscription: Subscription;
  userRoles: Roles[] = [];
  hasEditingPermission: boolean = false;

  @Input({ required: true }) vines: Vine[] = [];
  @Input({ required: true }) parentId: string;

  ngOnInit(): void {
    this.userRolesSubscription = this.authService.getUser().subscribe((user) => {
      const roles: Roles[] = user ? user.roles : [];
      this.userRoles = roles;
      this.hasEditingPermission = user ? roles.includes(Roles.ADMIN) : false;
    });
    this.vinesSubscription = this.vineService.list({ parentId: this.parentId, pageSize: 10, order: 'id' }).subscribe((vines) => { this.vines = vines; });
  }

  ngOnDestroy(): void {
    this.userRolesSubscription.unsubscribe();
  }

  openModal(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.modalService.openModal(id);
  }

  loadMore(event: MouseEvent) {
    event.preventDefault();
    if (this.vinesSubscription) this.vinesSubscription.unsubscribe();
    console.log(this.vines[this.vines.length - 1].id);
    this.vinesSubscription = this.vineService.list({
      parentId: this.parentId,
      pageSize: 10,
      order: 'id',
      startAfterItem: this.vines[this.vines.length - 1],
    }).subscribe((vines) => {
      this.vines = this.vines.concat(vines);
    });

  }
}
