import AuthService from '#services/firebase/auth/auth.service';
import { UserService } from '#services/firebase/models/user/user.service';
import { ModalService } from '#services/modal/modal.service';
import { User } from '#types/Auth/User';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, OnDestroy {
  userService: UserService = inject(UserService);
  modalService: ModalService = inject(ModalService);
  authService: AuthService = inject(AuthService);

  userSubscription: Subscription;
  modalSubscription: Subscription;
  pageSize: number = 5;

  users: User[] = [];

  currentUser: User | null = null;

  lastUser: User | undefined;

  ngOnInit(): void {
    this.userSubscription = this.userService.list({ pageSize: this.pageSize }).subscribe((users) => {
      this.users = users;
      this.lastUser = users[users.length - 1] || undefined;
    });
    this.authService.getUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  openModal(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.modalService.openModal(id);
  }

  loadMore(event: MouseEvent) {
    if (this.lastUser) {
      this.userService.list({
        parentId: 'none',
        pageSize: this.pageSize,
        order: ['uid'],
        startAfterItem: this.lastUser,
      }).subscribe((users) => {
        // TODO: Check why subscription is called twice
        // and return current logged in user until query get it
        let index = -1;
        if (this.currentUser) {
          index = users.findIndex((user) => user.uid === this.currentUser!.uid);
        }
        if (index > -1) {
          users.splice(index, 1);
        }
        this.lastUser = users[users.length - 1] || undefined;
        this.users = this.users.concat(users);
      });
    }
  }
}
