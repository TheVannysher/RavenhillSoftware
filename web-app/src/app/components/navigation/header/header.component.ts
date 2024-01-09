import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  router: Router = inject(Router);

  @Input() category = '';

  @Input() title = '';

  @Input({ required: true }) hideBackButton: boolean;

  back() {
    this.router.navigate(['..']);
  }
}
