import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsPanelComponent } from './lists-panel.component';

describe('ListsPanelComponent', () => {
  let component: ListsPanelComponent;
  let fixture: ComponentFixture<ListsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsPanelComponent]
    });
    fixture = TestBed.createComponent(ListsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
