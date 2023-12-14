import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/lib/enum/routes';
import { NavigaionTab } from 'types/navigation/navigator_tabs';

export const NAVIGATIONS_TABS:NavigaionTab[] = [
  {
    name: 'Profile',
    type: 'icon',
    src: 'featherUser',
    path: RoutesPath.USER_PROFILE,
  },
  {
    name: 'Overview',
    type: 'image',
    src: 'assets/logo.svg',
    path: RoutesPath.OVERVIEW,
  },
  {
    name: 'Taskboard',
    type: 'icon',
    src: 'featherZap',
    path: RoutesPath.TASKBOARD,
  },
];

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent {
  router:Router = inject(Router);

  currentTab = 'Overview';

  tabs = NAVIGATIONS_TABS;

  handleClick(tab:string) {
    this.currentTab = tab;
  }
}
