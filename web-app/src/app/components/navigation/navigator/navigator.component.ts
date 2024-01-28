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

export const NAVIGATIONS_TABS: NavigaionTab[] = [
  {
    name: RouteNames.OVERVIEW,
    type: 'icon',
    src: NGIcons.feather.BarChart2,
    path: RouteFullPaths.OVERVIEW,
  },
  {
    name: RouteNames.USER_PROFILE,
    type: 'icon',
    src: NGIcons.feather.User,
    path: RouteFullPaths.USER_PROFILE,
  },
  {
    name: RouteNames.TASKBOARD,
    type: 'icon',
    src: NGIcons.feather.Zap,
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
    this.activatedRoute.url.subscribe((url) => {
      this.currentRoute = url[0].path as RouteNames;
    });
    this.auth.getUser().subscribe((user) => {
      if (user) {
        this.isAdmin = user.roles.includes('admin');
      }
    });
  }
}
