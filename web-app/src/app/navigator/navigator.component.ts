import { Component } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  currentRoute = 'vines'
  navigatorItems = ['route_1', 'vines', 'route_2']
}
