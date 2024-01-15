import { Location } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { RouteFullPaths } from '#lib/enum/routes';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  history: string[] = [];

  location: Location = inject(Location);

  router: Router = inject(Router);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  back() {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  navigate(route: RouteFullPaths) {
    this.router.navigate([route]);
  }
}
