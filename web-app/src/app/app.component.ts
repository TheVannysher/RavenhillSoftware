import { Component, inject, OnInit } from '@angular/core';
import {
  Event, EventType, Router,
} from '@angular/router';
import { RouteCategories } from 'src/lib/enum/routes';

import AuthService from './services/firebase/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  router: Router = inject(Router);

  authService: AuthService = inject(AuthService);

  showBottomNavigator = false;

  userIsLoggedIn = false;

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((status) => {
      this.userIsLoggedIn = status;
      console.log(this.userIsLoggedIn);
    });
    this.router.events.subscribe((e: Event) => {
      if (e.type === EventType.RoutesRecognized) {
        const currentCategory = e.urlAfterRedirects.split('/')[1];
        this.showBottomNavigator = currentCategory === RouteCategories.HOME;
      }
    });
  }
}
