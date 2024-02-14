import { UserService } from '#services/firebase/models/user/user.service';
import { User } from '#types/Auth/User';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { on } from 'events';
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
    this.userSubscription = this.userService.list(2).subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  loadMore() {
    this.userSubscription.unsubscribe();
    this.userSubscription = this.userService.list(1, 'uid', this.users[this.users.length - 1].uid).subscribe((users) => {
      this.users = this.users.concat(users);
    });
  }
}
