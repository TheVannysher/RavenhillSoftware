import { CanActivateFn } from '@angular/router';

// TODO: 
// RolesService

export const workerGuard: CanActivateFn = (route, state) => {
  return true;
};
