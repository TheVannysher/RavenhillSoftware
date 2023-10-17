/* eslint-disable import/prefer-default-export */
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import AuthService from 'src/app/services/firebase/auth/auth.service';

// TODO:
// RolesService

export const adminGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  authService.getLoginStatus();
  return false;
};
