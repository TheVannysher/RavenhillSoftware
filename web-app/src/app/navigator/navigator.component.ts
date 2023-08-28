import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { BOTTOM_NAV_ROUTES, ROUTES_PATH} from 'src/lib/enum/routes';
import { NavigationServiceService } from '../services/navigation-service.service';

const slideAnimation = trigger('routeAnimation', [
  state(ROUTES_PATH.user_profile, style({
    transform: 'translate(0)',
  })),
  state(ROUTES_PATH.vines, style({
    transform: 'translate(5rem)',
  })),
  state(ROUTES_PATH.work_order, style({
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
    private route: ActivatedRoute,
    private router: Router,
    private navigation: NavigationServiceService,
  ) {
    this.navigatorItems = navigation.getNavigatorRoutes();
  }

  ngOnInit() {
    this.route.data.subscribe(data => console.log(data));
    // const fullPath = this.router.url;
    
    // console.log('router: ', this.router)
    // console.log('route', this.route)
    // const routeName = fullPath == '/' ? ROUTES_PATH.vines : fullPath.split('/')[1]
    // if (BOTTOM_NAV_ROUTES.includes(routeName as ROUTES_PATH)) {
    //   console.log('in IF: ', routeName)
    //   this.currentRoute = routeName;
    // }
  }

  handleOnClick(value:Route) {
    this.router.navigate([value.path]);
    this.currentRoute = value;
    this.routeAnimationState = value.path!;
    
  }
}
