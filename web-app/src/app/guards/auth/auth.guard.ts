import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {  map } from 'rxjs';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  return authService.getLoginStatus().pipe<boolean>(
    map(user => {
      return !user ?  false : true;
    })
  );
};
