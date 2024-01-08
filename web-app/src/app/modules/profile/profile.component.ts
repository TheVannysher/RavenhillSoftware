import { Component, inject, OnInit } from '@angular/core';

import ROUTES_DATA from '#lib/routes/routesData';
import AuthService from '#services/firebase/auth/auth.service';
import { RouteData } from '#types/navigation/routes.types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);

  headerInfos: RouteData = ROUTES_DATA.profile;

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.headerInfos.name = user.displayName || user.email!;
        this.headerInfos.category = user.roles.join(',');
      }
    });
  }

  async logout() {
    await this.authService.logout();
    window.location.reload();
  }
}
