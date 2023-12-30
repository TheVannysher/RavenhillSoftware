import { Component, OnInit, inject } from '@angular/core';
import { ProfileService } from 'src/app/services/routes/profile.service';
import ROUTES_DATA from 'src/lib/routes/routesData';
import { RouteData } from 'types/navigation/routes.types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileService = inject(ProfileService);

  routeData: RouteData = ROUTES_DATA.profile;

  ngOnInit(): void {
    this.routeData = this.profileService.getRouteData();
  }
}
