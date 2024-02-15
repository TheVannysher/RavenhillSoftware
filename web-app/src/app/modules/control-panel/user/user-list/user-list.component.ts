import { UserService } from '#services/firebase/models/user/user.service';
import { User } from '#types/Auth/User';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, OnDestroy {
  userService: UserService = inject(UserService);

  userSubscription: Subscription;

  users: User[] = [];

  ngOnInit(): void {
    this.userSubscription = this.userService.list({ pageSize: 1 }).subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  loadMore() {
    this.userSubscription.unsubscribe();
    this.userSubscription = this.userService.list({
      parentId: 'none',
      pageSize: 1,
      order: 'uid',
      startAfterId: this.users[this.users.length - 1].uid
    }).subscribe((users) => {
      console.log('newsub: ', users);
      this.users = this.users.concat(users);
    });
  }
}
