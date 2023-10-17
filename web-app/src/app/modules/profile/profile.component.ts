import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export default class ProfileComponent {
  private authService: AuthService = inject(AuthService);
  handleLogout() {
    console.log('logging out...')
    this.authService.logout();
  }
}
