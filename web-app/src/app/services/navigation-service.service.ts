import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ROUTES_PATH } from 'src/lib/enum/routes';
import settings from 'src/lib/settings/settings';

// order matters
const BOTTOM_NAV_ROUTES = [
  ROUTES_PATH.user_profile,
  ROUTES_PATH.vines,
  ROUTES_PATH.work_order,
];

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  constructor(private router: Router) { }

  currentRouteData() {
    const pathNameWithoutFowardSlash = this.router.url;
    console.log(pathNameWithoutFowardSlash);
  }

  getNavigatorRoutes(): Route[] {
    const routes = BOTTOM_NAV_ROUTES.map((name) => this.router.config.find((route) => route.path == name)!);  
    console.log("Routes: ", routes);
    return routes;
  }
}
