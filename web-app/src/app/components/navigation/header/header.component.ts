import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteData } from 'types/navigation/routes.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({ required: true }) category: string;
  @Input({ required: true }) title: string;
  @Input({ required: false }) showBackButton: string;
}
