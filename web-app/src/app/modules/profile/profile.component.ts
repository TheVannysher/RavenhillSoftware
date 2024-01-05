import { Component, inject, OnInit } from '@angular/core';

import ROUTES_DATA from '#lib/routes/routesData';
import { ProfileService } from '#services/routes/profile.service';
import { RouteData } from '#types/navigation/routes.types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileService = inject(ProfileService);

  routeData: RouteData = ROUTES_DATA.profile;

  ngOnInit(): void {
    this.routeData = this.profileService.getRouteData();
  }
}
