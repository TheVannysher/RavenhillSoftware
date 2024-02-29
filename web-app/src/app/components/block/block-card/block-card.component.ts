import { Block } from '#types/firebase/models/block';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-card',
  templateUrl: './block-card.component.html',
  styleUrl: './block-card.component.scss',
})
export class BlockCardComponent {
  @Input({ required: true }) block: Block;
}
