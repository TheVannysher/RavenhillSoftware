/* eslint-disable import/prefer-default-export */
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import AuthService from 'src/app/services/firebase/auth/auth.service';

import { RouteFullPaths } from '#lib/enum/routes';
import { Roles } from '#lib/enum/roles';

export const adminGuard: CanActivateFn = (_, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.getUser().pipe(map((user) => {
    if (user) {
      const hasRole = user.roles.includes(Roles.ADMIN);
      return hasRole;
    }
    router.navigate([RouteFullPaths.LOGIN], { queryParams: { returnUrl: state.url } });
    return false;
  }));
};
