import { Injectable, inject } from '@angular/core';
import ROUTES_DATA from 'src/lib/routes/routesData';
import AuthService from '../firebase/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  authService = inject(AuthService);

  constructor() { }

  getRouteData() {
    const data = ROUTES_DATA.profile;
    const userInfos = this.authService.getUser();
    console.log(userInfos);
    if (userInfos) {
      data.name = userInfos.username;
      data.category = userInfos.role;
    }
    return data;
  }
}
