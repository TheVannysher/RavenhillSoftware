import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VineFormComponent } from './vine-form.component';

describe('VineFormComponent', () => {
  let component: VineFormComponent;
  let fixture: ComponentFixture<VineFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VineFormComponent]
    });
    fixture = TestBed.createComponent(VineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
