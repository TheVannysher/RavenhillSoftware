import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

import { Position } from '#types/firebase/models/vine';

@Component({
  selector: 'app-grid-node',
  templateUrl: './grid-node.component.html',
})
export class GridNodeComponent {
  @Input() @Output() locked = false;

  @Input({ required: true }) content: string;

  @Input() selected = false;

  @Input({ required: true }) position: Position;

  @Output() clicked: EventEmitter<Position> = new EventEmitter();

  nodeClicked() {
    if (!this.locked) {
      this.clicked.emit(this.position);
      this.selected = !this.selected;
    }
    console.log('nodes: ', this.selected);
  }
}
