/* eslint-disable import/prefer-default-export */
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { RouteFullPaths } from '#lib/enum/routes';
import AuthService from '#services/firebase/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.getUser().pipe(map((user) => {
    if (user) {
      return true;
    }
    router.navigate([RouteFullPaths.LOGIN], { queryParams: { returnUrl: state.url } });
    return false;
  }));
};
