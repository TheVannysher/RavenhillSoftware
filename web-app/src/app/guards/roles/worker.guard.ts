import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';

import AuthService from '#services/firebase/auth/auth.service';

export const workerGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  return authService.getUser().pipe(map((user) => {
    if (user) {
      const hasRole = user.roles.includes('admin');
      return hasRole;
    }
    return false;
  }));
};
