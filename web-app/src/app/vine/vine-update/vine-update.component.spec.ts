import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VineUpdateComponent } from './vine-update.component';

describe('VineUpdateComponent', () => {
  let component: VineUpdateComponent;
  let fixture: ComponentFixture<VineUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VineUpdateComponent]
    });
    fixture = TestBed.createComponent(VineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
