import {
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouteData } from '#types/navigation/routes.types';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent implements OnInit {
  route = inject(ActivatedRoute);

  @Input() overwriteHeaderContent = false;

  @Input() routeData: RouteData;

  ngOnInit(): void {
    if (!this.overwriteHeaderContent) {
      this.getHeaderData();
    }
  }

  getHeaderData() {
    this.route.data.subscribe((routeData) => {
      if (routeData) {
        this.routeData = routeData as (RouteData);
      }
    });
  }
}
