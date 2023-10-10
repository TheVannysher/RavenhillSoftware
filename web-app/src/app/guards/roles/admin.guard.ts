import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  authService.getLoginStatus()
  return false;
};
