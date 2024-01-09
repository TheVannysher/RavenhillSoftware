import {
  Component, inject, OnInit,
} from '@angular/core';
import {
  ActivatedRoute, Event, EventType, Router,
} from '@angular/router';
import { RouteCategories, RouteFullPaths, RouteNames } from 'src/lib/enum/routes';
import ROUTES_DATA from 'src/lib/routes/routesData';

import AuthService from '#services/firebase/auth/auth.service';
import { NavigaionTab } from '#types/navigation/navigator_tabs';

export const NAVIGATIONS_TABS: NavigaionTab[] = [
  {
    name: RouteNames.USER_PROFILE,
    type: 'icon',
    src: 'featherUser',
    path: RouteFullPaths.USER_PROFILE,
    color: ROUTES_DATA.profile!.color,
  },
  {
    name: RouteNames.OVERVIEW,
    type: 'image',
    src: 'assets/logo.svg',
    path: RouteFullPaths.OVERVIEW,
    color: ROUTES_DATA.overview!.color,
  },
  {
    name: RouteNames.TASKBOARD,
    type: 'icon',
    src: 'featherZap',
    path: RouteFullPaths.TASKBOARD,
    color: ROUTES_DATA.taskboard!.color,
  },
];

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  authService: AuthService = inject(AuthService);

  router: Router = inject(Router);

  activatedRoute = inject(ActivatedRoute);

  currentRoute: RouteNames | undefined;

  tabs = NAVIGATIONS_TABS;

  showNavigator = false;

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.router.events.subscribe((e: Event) => {
          if (e.type === EventType.NavigationEnd) {
            const [, currentCategory, currentRouteName] = e.urlAfterRedirects.split('/');
            if (currentCategory === RouteCategories.HOME) {
              this.currentRoute = currentRouteName as RouteNames;
            } else {
              this.currentRoute = undefined;
            }
          }
          this.showNavigator = !!this.currentRoute;
        });
      } else {
        this.currentRoute = undefined;
        this.showNavigator = false;
      }
    });
  }

  handleClick(tab: RouteNames) {
    this.currentRoute = tab;
  }
}
