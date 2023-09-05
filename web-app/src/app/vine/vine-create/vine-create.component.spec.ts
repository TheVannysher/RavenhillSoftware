import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VineCreateComponent } from './vine-create.component';

describe('VineCreateComponent', () => {
  let component: VineCreateComponent;
  let fixture: ComponentFixture<VineCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VineCreateComponent]
    });
    fixture = TestBed.createComponent(VineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
