import { BOTTOM_NAV_ROUTES } from './../../lib/enum/routes';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ROUTES_PATH } from 'src/lib/enum/routes';
import settings from 'src/lib/settings/settings';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  constructor(private router: Router) { }

  currentRouteData() {
    const pathName = window.location.pathname;
    const currentRoute = pathName == '/' ? ROUTES_PATH.vines : pathName.split('/')[1]
    return this.router.config.find((route) => route.path == currentRoute) || undefined;
  }

  getNavigatorRoutes(): Route[] {
    const routes = BOTTOM_NAV_ROUTES.map((name) => this.router.config.find((route) => route.path == name)!);  
    console.log("Routes: ", routes);
    return routes;
  }
}
