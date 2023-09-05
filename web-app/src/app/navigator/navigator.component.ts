import { animate, state, style, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ROUTES_PATH} from 'src/lib/enum/routes';
import { NavigationServiceService } from '../services/navigation-service.service';

const slideAnimation = trigger('routeAnimation', [
  state(ROUTES_PATH.profile, style({
    transform: 'translate(0)',
  })),
  state(ROUTES_PATH.vines, style({
    transform: 'translate(5rem)',
  })),
  state(ROUTES_PATH.taskboard, style({
    transform: 'translate(10rem)',
  })),
])

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  animations: [
    slideAnimation,
  ]
})
export class NavigatorComponent implements OnInit{
  routeAnimationState: string = '';
  @Input() currentRoute:Route | undefined;
  navigatorItems:Route[] = [];

  constructor(
    private router: Router,
    private navigation: NavigationServiceService,
  ) { }

  ngOnInit() {
    const currentRouteData = this.navigation.currentRouteData();
    this.navigatorItems = this.navigation.getNavigatorRoutes();
    this.currentRoute = currentRouteData;
    this.routeAnimationState = currentRouteData?.path || '';
  }

  handleOnClick(value:Route) {
    this.router.navigate([value.path]);
    this.currentRoute = value;
    this.routeAnimationState = value.path!;
  }
}
