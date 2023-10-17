import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_PATH } from 'src/lib/enum/routes';

@Injectable({
  providedIn: 'root',
})
export default class NavigationServiceService {
  constructor(private router: Router) { }

  currentRouteData() {
    const pathName = window.location.pathname;
    const currentRoute = pathName === '/' ? ROUTES_PATH.vines : pathName.split('/')[1];
    return this.router.config.find((route) => route.path === currentRoute) || undefined;
  }
}
