import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteData, RouteIcon } from 'types/navigation/routes.types';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent {
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
    })
  }
}
