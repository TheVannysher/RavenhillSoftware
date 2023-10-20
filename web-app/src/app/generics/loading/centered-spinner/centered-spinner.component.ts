import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-centered-spinner',
  templateUrl: './centered-spinner.component.html',
})
export default class CenteredSpinnerComponent {
  @Input({ required: true }) loading: boolean;

  @Input() size = '16';
}
