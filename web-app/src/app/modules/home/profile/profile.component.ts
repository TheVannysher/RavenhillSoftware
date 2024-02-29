import { Component, inject, OnInit } from '@angular/core';

import { HeaderInfo } from '#components/page-wrapper/page-wrapper.component';
import ROUTES_DATA from '#lib/routes/routesData';
import AuthService from '#services/firebase/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);

  headerInfos: HeaderInfo = { title: '', category: '' };

  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.headerInfos = {
          ...ROUTES_DATA.profile,
          title: user.displayName || user.email!,
          category: user.roles.join(','),
        };
      }
    });
  }
}
