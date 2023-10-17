import { state, style, trigger } from '@angular/animations';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-navigator-item',
  templateUrl: './navigator-item.component.html',
  styleUrls: ['./navigator-item.component.scss'],
})
export default class NavigatorItemComponent {

  @Input() active: boolean = false;
  @Input() route: Route | undefined;
  @Output() routeChange: EventEmitter<Route> = new EventEmitter();
  @Input() inversedColor: boolean;

  handleOnClick() {
    this.routeChange.emit(this.route);
  }

}