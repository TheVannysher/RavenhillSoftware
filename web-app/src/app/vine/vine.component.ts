import { Component } from '@angular/core';

@Component({
  selector: 'app-vine',
  templateUrl: './vine.component.html',
  styleUrls: ['./vine.component.scss']
})
export class VineComponent {
  clicked = false;
  onClick() {
    this.clicked = !this.clicked
  }
}
