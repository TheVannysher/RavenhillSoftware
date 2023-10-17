import { Component, inject, OnInit } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { BOTTOM_NAV_ROUTES, ROUTES_PATH } from 'src/lib/enum/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export default class AppComponent implements OnInit {
  showBottomNav = false;

  router: Router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e.type === EventType.NavigationEnd) {
        const { url } = e; this.showBottomNav = BOTTOM_NAV_ROUTES.includes(url.split('/')[1] as ROUTES_PATH);
      }
    });
  }
}
