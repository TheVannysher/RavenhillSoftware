import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BOTTOM_NAV_ROUTES, RoutesPaths } from 'src/lib/enum/routes';
import { RouteData } from 'types/shared';

const sortNavigator = ({ data: routeAData }: Route, { data: routeBData }: Route) => (
  (routeAData as RouteData).navigatorPosition > (routeBData as RouteData).navigatorPosition ? 1 : -1
);

@Injectable({
  providedIn: 'root',
})
export default class NavigationServiceService {
  constructor(private router: Router) { }

  currentRouteData() {
    const pathName = window.location.pathname;
    const currentRoute = pathName === '/' ? RoutesPaths.DASHBOARD : pathName.split('/')[1];
    return this.router.config.find((route) => route.path === currentRoute) || undefined;
  }

  getBottomNavigatorRoutes() {
    const routes = this.router.config;
    return routes.filter((value) => BOTTOM_NAV_ROUTES.includes(value.path as RoutesPaths))
      .sort(sortNavigator);
  }
}
