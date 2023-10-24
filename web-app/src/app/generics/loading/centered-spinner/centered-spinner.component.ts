import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-centered-spinner',
  templateUrl: './centered-spinner.component.html',
})
export default class CenteredSpinnerComponent {
  @Input() size = '16';

  @Input() color = 'black';
}
