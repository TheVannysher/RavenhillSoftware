import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { Vine } from '#types/firebase/models/vine';
import { ModalService } from '#services/modal/modal.service';
import AuthService from '#services/firebase/auth/auth.service';
import { Subscription } from 'rxjs';
import { Roles } from '#lib/enum/roles';

@Component({
  selector: 'app-vine-list',
  templateUrl: './vine-list.component.html',
  styleUrls: ['./vine-list.component.scss'],
})
export class VineListComponent implements OnInit, OnDestroy {
  modalService: ModalService = inject(ModalService);
  authService: AuthService = inject(AuthService);
  private userRolesSubscription: Subscription;
  userRoles: Roles[] = [];
  hasEditingPermission: boolean = false;

  @Input({ required: true }) vines: Vine[] = [];

  ngOnInit(): void {
    this.userRolesSubscription = this.authService.getUser().subscribe((user) => {
      const roles: Roles[] = user ? user.roles : [];
      this.userRoles = roles;
      this.hasEditingPermission = user ? roles.includes(Roles.ADMIN) : false;
    });
  }

  ngOnDestroy(): void {
    this.userRolesSubscription.unsubscribe();
  }

  openModal(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.modalService.openModal(id);
  }
}
