import { Component } from '@angular/core';
import { NGIcons } from 'src/app/icons';

import { HeaderInfo } from '#components/page-wrapper/page-wrapper.component';
import { RouteIconTypes } from '#types/navigation/routes.types';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  headerInfo: HeaderInfo = {
    title: 'Fields',
    category: 'Control-Panel',
    color: '--clr-green-500',
    icon: {
      src: NGIcons.feather.Feather,
      type: RouteIconTypes.NG_ICON,
    },
  };
}
