import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCardComponent } from './block-card.component';

describe('BlockCardComponent', () => {
  let component: BlockCardComponent;
  let fixture: ComponentFixture<BlockCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
