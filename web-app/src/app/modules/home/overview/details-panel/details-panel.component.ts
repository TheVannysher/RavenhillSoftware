import { BlockService } from '#services/firebase/models/block/block.service';
import { OverviewContextService } from '#services/overview/overview-context.service';
import { Block } from '#types/firebase/models/block';
import { Field } from '#types/firebase/models/field';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrl: './details-panel.component.scss'
})
export class DetailsPanelComponent implements OnInit, OnDestroy {
  overviewContextService: OverviewContextService = inject(OverviewContextService);
  private blockSubscription: Subscription;
  blockService: BlockService = inject(BlockService);
  @Input({ required: true }) field: Field | undefined;
  blockList: Block[] = [];
  loadingBlocks = true;
  loadingVines = true;

  ngOnInit(): void {
    this.overviewContextService.context$.subscribe(ctx => {
      this.field = ctx.field
      if (ctx.field) {
        this.blockSubscription = this.blockService.getAll(ctx.field.id).subscribe(blocks => { this.blockList = blocks; this.loadingBlocks = false; });
      }
    })
  }
  ngOnDestroy(): void {
    if (this.blockSubscription) this.blockSubscription.unsubscribe();
  }
}
