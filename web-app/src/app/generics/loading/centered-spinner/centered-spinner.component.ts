import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-centered-spinner',
  templateUrl: './centered-spinner.component.html',
  styleUrls: ['./centered-spinner.component.scss']
})
export class CenteredSpinnerComponent {
  @Input({ required: true }) loading: boolean;
  @Input() size: string = '16';
}
