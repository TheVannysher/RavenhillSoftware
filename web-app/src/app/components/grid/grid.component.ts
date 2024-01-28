import { Position } from '#types/firebase/models/vine';
import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent {
  @Output() valueChanged: EventEmitter<Map<number, string[]>> = new EventEmitter();

  @Input({ required: true }) selectedBlock = '1';

  @Input() selection: string[] = [];

  @Input() nodes: string[][] = [];

  value: Map<number, string[]> = new Map();

  itemSelected(item: Position) {
    const { row: i, vine: j } = item;
    if (this.nodes[i][j] === '') {
      this.nodes[i][j] = this.selectedBlock;
    } else {
      this.nodes[i][j] = '';
    }
  }

  isSelected(row: number, index: number) {
    return this.selection.includes(`${row}_${index}`);
  }

  addNode(row: number) {
    this.nodes[row].push('');
  }

  removeNode(row: number) {
    if (this.nodes[row].length > 0) {
      this.nodes[row].pop();
    }
  }

  addRow() {
    this.nodes.push(['']);
  }

  removeRow() {
    this.nodes.pop();
  }
}
