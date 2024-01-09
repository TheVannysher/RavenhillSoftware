/* eslint-disable import/prefer-default-export */
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import AuthService from 'src/app/services/firebase/auth/auth.service';

// TODO:
// RolesService

export const adminGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  return authService.getUser().pipe(map((user) => {
    if (user) {
      const hasRole = user.roles.includes('admin');
      return hasRole;
    }
    return false;
  }));
};
