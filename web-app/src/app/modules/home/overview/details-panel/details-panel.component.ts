import { BlockService } from '#services/firebase/models/block/block.service';
import { VineService } from '#services/firebase/models/vine/vine.service';
import { OverviewContextService } from '#services/overview/overview-context.service';
import { Block } from '#types/firebase/models/block';
import { Field } from '#types/firebase/models/field';
import { Vine } from '#types/firebase/models/vine';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrl: './details-panel.component.scss'
})
export class DetailsPanelComponent implements OnInit, OnDestroy {
  overviewContextService: OverviewContextService = inject(OverviewContextService);
  vineService: VineService = inject(VineService);
  private blockSubscription: Subscription;
  private contextSubscription: Subscription;
  private vineSubscription: Subscription;
  @Input({ required: true }) field: Field | undefined;
  vines: Vine[] = [];
  noMoreVines = false;
  vinePageSize = 10;
  loadingBlocks = true;
  loadingVines = true;

  ngOnInit(): void {
    this.contextSubscription = this.overviewContextService.context$.subscribe(ctx => {
      this.field = ctx.field;
      if (ctx.field) {
        this.vineSubscription = this.vineService.list({ parentId: ctx.field.id, order: ['row', 'vineNumber'], pageSize: this.vinePageSize }).subscribe(vines => {
          this.vines = vines;
          this.loadingVines = false;
          this.noMoreVines = vines.length < this.vinePageSize;
        });
      }
    });
  }
  ngOnDestroy(): void {
    this.contextSubscription.unsubscribe();
    if (this.vineSubscription) this.vineSubscription.unsubscribe();
  }

  loadMore($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.field) {
      this.vineSubscription.unsubscribe();
      this.vineSubscription = this.vineService.list({
        parentId: this.field.id,
        order: ['row', 'vineNumber'],
        pageSize: this.vinePageSize,
        startAfterItem: this.vines[this.vines.length - 1],
      }).subscribe(vines => {
        this.vines = this.vines.concat(vines);
        this.loadingVines = false;
        this.noMoreVines = vines.length < this.vinePageSize;
      });
    }
  }
}
