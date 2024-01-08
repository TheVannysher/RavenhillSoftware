import { UserInfo } from '@angular/fire/auth';

export interface User extends UserInfo {
  roles: [string],
}
