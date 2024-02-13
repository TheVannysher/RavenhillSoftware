import {
  Component, EventEmitter, inject, Input, Output,
} from '@angular/core';

import AuthService from '#services/firebase/auth/auth.service';
import { NavigationService } from '#services/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navigate: NavigationService = inject(NavigationService);

  auth: AuthService = inject(AuthService);

  @Input() category = '';

  @Input() title = '';

  @Input({ required: true }) hideBackButton: boolean;

  menuOpen = false;

  @Output() menuButtonClicked: EventEmitter<boolean> = new EventEmitter();

  back() {
    this.navigate.back();
  }

  logout() {
    this.auth.logout();
    window.location.reload();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.menuButtonClicked.emit(this.menuOpen);
  }
}
