import { Component, inject, OnInit } from '@angular/core';
import {
  Event, EventType, Router,
} from '@angular/router';
import { RouteCategories, RouteNames } from 'src/lib/enum/routes';

import AuthService from './services/firebase/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  router: Router = inject(Router);

  authService: AuthService = inject(AuthService);

  currentRoute: RouteNames | undefined;

  userIsLoggedIn = false;

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.router.events.subscribe((e: Event) => {
          if (e.type === EventType.NavigationEnd) {
            const [, currentCategory, currentRouteName] = e.urlAfterRedirects.split('/');
            if (currentCategory === RouteCategories.HOME) {
              this.currentRoute = currentRouteName as RouteNames;
            }
          }
          this.userIsLoggedIn = true;
        });
      } else {
        this.currentRoute = undefined;
      }
    });
  }
}
