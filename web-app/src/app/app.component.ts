import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_PATH } from 'src/lib/enum/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  showBottomNav: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit() {
    const pathName = window.location.pathname;
    const currentRoute = pathName == '/' ? ROUTES_PATH.vines : pathName.split('/')[1]
    this.showBottomNav = Object.values(ROUTES_PATH).includes(currentRoute as ROUTES_PATH);
    console.log(this.showBottomNav);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('router: ', this.router);
  }
}
