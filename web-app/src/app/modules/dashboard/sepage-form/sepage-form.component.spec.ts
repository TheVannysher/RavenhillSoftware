import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepageFormComponent } from './sepage-form.component';

describe('SepageFormComponent', () => {
  let component: SepageFormComponent;
  let fixture: ComponentFixture<SepageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SepageFormComponent]
    });
    fixture = TestBed.createComponent(SepageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
