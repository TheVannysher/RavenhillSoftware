import {
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouteData, RouteIcon } from '#types/navigation/routes.types';

export interface HeaderInfo {
  category: string,
  color?: string,
  title: string,
  icon?: RouteIcon,
}
@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent implements OnInit {
  route = inject(ActivatedRoute);

  @Input() overwriteHeaderContent = false;

  @Input() hideBackButton = false;

  @Input() headerInfo: HeaderInfo = {
    title: '',
    category: '',
  };

  open = false;

  ngOnInit(): void {
    if (!this.overwriteHeaderContent) {
      this.getHeaderData();
    }
  }

  getHeaderData() {
    this.route.data.subscribe((routeData) => {
      if (routeData) {
        const {
          name, category, icon,
        } = routeData as (RouteData);
        this.headerInfo = {
          title: name,
          category,
          icon,
        };
      }
    });
  }

  menuToggle(state: boolean) {
    this.open = state;
  }
}
