import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhButtonComponent } from './rh-button.component';

describe('RhButtonComponent', () => {
  let component: RhButtonComponent;
  let fixture: ComponentFixture<RhButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RhButtonComponent]
    });
    fixture = TestBed.createComponent(RhButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
