import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input({ required: true }) iconName: string;

  @Input({ required: true }) color: string;
}
