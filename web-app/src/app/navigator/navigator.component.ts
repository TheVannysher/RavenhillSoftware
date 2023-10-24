import {
  state, style, trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RoutesPaths } from 'src/lib/enum/routes';

import NavigationServiceService from '../services/navigation-service.service';

const slideAnimation = trigger('routeAnimation', [
  state(RoutesPaths.PROFILE, style({
    transform: 'translate(0)',
  })),
  state(RoutesPaths.DASHBOARD, style({
    transform: 'translate(5rem)',
  })),
  state(RoutesPaths.TASKBOARD, style({
    transform: 'translate(10rem)',
  })),
]);

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  animations: [
    slideAnimation,
  ],
})
export default class NavigatorComponent implements OnInit {
  routeAnimationState = '';

  @Input() currentRoute: Route | undefined;

  navigatorItems: Route[] = [];

  inversedColor: boolean;

  loading: boolean;

  constructor(
    private router: Router,
    private navigation: NavigationServiceService,
  ) { }

  ngOnInit() {
    this.loadNavigator();
  }

  handleOnClick(value: Route) {
    this.router.navigate([value.path]);
    this.currentRoute = value;
    this.routeAnimationState = value.path!;
    if (value.path === RoutesPaths.PROFILE) {
      this.inversedColor = true;
    } else {
      this.inversedColor = false;
    }
  }

  loadNavigator() {
    this.loading = true;
    this.navigatorItems = this.navigation.getBottomNavigatorRoutes();
    const currentRouteData = this.navigation.currentRouteData();
    if (currentRouteData) {
      this.inversedColors(currentRouteData);
      this.currentRoute = currentRouteData;
      this.routeAnimationState = currentRouteData?.path || '';
    }
    this.loading = false;
  }

  inversedColors(currentData: Route) {
    if (currentData.path === RoutesPaths.PROFILE) {
      this.inversedColor = true;
    } else {
      this.inversedColor = false;
    }
  }
}
