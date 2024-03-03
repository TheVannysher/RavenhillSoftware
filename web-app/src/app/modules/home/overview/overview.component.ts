import { BlockService } from '#services/firebase/models/block/block.service';
import { OverviewContextService } from '#services/overview/overview-context.service';
import { Block } from '#types/firebase/models/block';
import { Field } from '#types/firebase/models/field';
import { Vine } from '#types/firebase/models/vine';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  overviewContext: OverviewContextService = inject(OverviewContextService);
  blockService: BlockService = inject(BlockService);
  blocks: Block[] = [];
  vines: Vine[] = [];
  field: Field | undefined;

  loading = true;

  ngOnInit(): void {
    this.overviewContext.context$.subscribe(ctx => {
      this.field = ctx.field;
      if (ctx.field) {
        this.blockService.getAll(ctx.field.id).subscribe(blocks => {
          this.blocks = blocks;
        });
      }
    });
  }

  loadField(field: Field): void {
    if (field) {
      this.loading = false;
      this.overviewContext.setField(field);
    }
  }

}
