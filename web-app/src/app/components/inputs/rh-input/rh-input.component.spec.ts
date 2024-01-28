import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhInputComponent } from './rh-input.component';

describe('RhInputComponent', () => {
  let component: RhInputComponent;
  let fixture: ComponentFixture<RhInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RhInputComponent]
    });
    fixture = TestBed.createComponent(RhInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
