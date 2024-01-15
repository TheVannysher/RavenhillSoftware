import {
  Component, inject, Input, OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
} from '@angular/router';
import { NGIcons } from 'src/app/icons';
import { RouteFullPaths, RouteNames } from 'src/lib/enum/routes';

import AuthService from '#services/firebase/auth/auth.service';
import { NavigaionTab } from '#types/navigation/navigator_tabs';
import { RouteData } from '#types/navigation/routes.types';

export const NAVIGATIONS_TABS: NavigaionTab[] = [
  {
    name: RouteNames.OVERVIEW,
    type: 'icon',
    src: NGIcons.feather.Feather,
    path: RouteFullPaths.OVERVIEW,
  },
  {
    name: RouteNames.USER_PROFILE,
    type: 'icon',
    src: 'featherUser',
    path: RouteFullPaths.USER_PROFILE,
  },
  {
    name: RouteNames.TASKBOARD,
    type: 'icon',
    src: 'featherZap',
    path: RouteFullPaths.TASKBOARD,
  },
];

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
})
export class NavigatorComponent implements OnInit {
  auth: AuthService = inject(AuthService);

  activatedRoute = inject(ActivatedRoute);

  currentRoute: RouteNames | undefined;

  tabs = NAVIGATIONS_TABS;

  @Input() open = false;

  isAdmin = false;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      if (data) {
        this.currentRoute = (data as RouteData).name;
      }
    });
    this.auth.getUser().subscribe((user) => {
      if (user) {
        this.isAdmin = user.roles.includes('admin');
      }
    });
  }
}
