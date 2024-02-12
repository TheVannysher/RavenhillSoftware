import { Roles } from '#lib/enum/roles';
import { UserInfo } from '@angular/fire/auth';

export interface User extends UserInfo {
  roles: Roles[],
}
