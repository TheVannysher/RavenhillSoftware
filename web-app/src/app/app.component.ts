import { Component, OnInit, inject } from '@angular/core';
import { Router, EventType } from '@angular/router';
import { BOTTOM_NAV_ROUTES, ROUTES_PATH } from 'src/lib/enum/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.components.scss'],
})
export class AppComponent implements OnInit {
  showBottomNav: boolean = false;
  router:Router = inject(Router);

  ngOnInit() {
    console.log(this.router.events.subscribe((e) => {
      if (e.type == EventType.NavigationEnd) {
        const { url } = e;
        this.showBottomNav = BOTTOM_NAV_ROUTES.includes(url.split('/')[1] as ROUTES_PATH);
      } 
    }));
  }
}
