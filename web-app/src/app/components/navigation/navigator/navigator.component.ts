import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Event, EventType, Router, RouterEvent, RoutesRecognized } from '@angular/router';
import { RouteFullPaths, RouteNames } from 'src/lib/enum/routes';
import ROUTES_DATA from 'src/lib/routes/routesData';
import { NavigaionTab } from 'types/navigation/navigator_tabs';
import { RouteData } from 'types/navigation/routes.types';

export const NAVIGATIONS_TABS:NavigaionTab[] = [
  {
    name: RouteNames.USER_PROFILE,
    type: 'icon',
    src: 'featherUser',
    path: RouteFullPaths.USER_PROFILE,
    color: ROUTES_DATA.profile.color,
  },
  {
    name: RouteNames.OVERVIEW,
    type: 'image',
    src: 'assets/logo.svg',
    path: RouteFullPaths.OVERVIEW,
    color: ROUTES_DATA.overview.color,
  },
  {
    name: RouteNames.TASKBOARD,
    type: 'icon',
    src: 'featherZap',
    path: RouteFullPaths.TASKBOARD,
    color: ROUTES_DATA.taskboard.color,
  },
];

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  router:Router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  currentTab: RouteNames;

  tabs = NAVIGATIONS_TABS;

  ngOnInit(): void {
    console.log(this.router.url);
    this.router.events.subscribe((e: Event) => {
      if (e.type === EventType.RoutesRecognized) {
        this.currentTab = e.urlAfterRedirects.split('/')[2] as RouteNames;
      }
    })
  }

  handleClick(tab:RouteNames) {
    this.currentTab = tab;
  }
}
