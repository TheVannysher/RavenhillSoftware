import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import AuthService from '#services/firebase/auth/auth.service';
import { Roles } from '#lib/enum/roles';
import { RouteFullPaths } from '#lib/enum/routes';

export const workerGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.getUser().pipe(map((user) => {
    if (user) {
      return [Roles.WORKER, Roles.MANAGER, Roles.ADMIN].includes(user.roles);
    }
    router.navigate([RouteFullPaths.LOGIN], { queryParams: { returnUrl: state.url } });
    return false;
  }));
};
