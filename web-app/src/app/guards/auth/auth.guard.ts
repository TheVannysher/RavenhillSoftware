/* eslint-disable import/prefer-default-export */
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import AuthService from 'src/app/services/firebase/auth/auth.service';
import { RouteFullPaths } from 'src/lib/enum/routes';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  console.log(route, state);
  return authService.isLoggedIn().pipe(map((loggedIn) => {
    if (loggedIn) {
      return true;
    }
    router.navigate([RouteFullPaths.LOGIN], { queryParams: { returnUrl: state.url }});
    return false;
  }));
};
