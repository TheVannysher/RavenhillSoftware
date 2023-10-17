/* eslint-disable import/prefer-default-export */
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import AuthService from 'src/app/services/firebase/auth/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  return authService.getLoginStatus().pipe<boolean>(
    map((user) => (!!user)),
  );
};
