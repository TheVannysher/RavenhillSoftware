import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BOTTOM_NAV_ROUTES, ROUTES_PATH } from 'src/lib/enum/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  showBottomNav: boolean = false;
  
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    const pathName = this.router.url;
    const currentRoute = pathName == '/' ? ROUTES_PATH.vines : pathName.split('/')[1]
    this.showBottomNav = BOTTOM_NAV_ROUTES.includes(currentRoute as ROUTES_PATH);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('router: ', this.router);
  }
}
