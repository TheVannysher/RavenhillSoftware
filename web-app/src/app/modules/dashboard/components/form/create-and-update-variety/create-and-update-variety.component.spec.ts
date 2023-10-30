import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndUpdateVarietyComponent } from './create-and-update-variety.component';

describe('CreateAndUpdateVarietyComponent', () => {
  let component: CreateAndUpdateVarietyComponent;
  let fixture: ComponentFixture<CreateAndUpdateVarietyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAndUpdateVarietyComponent]
    });
    fixture = TestBed.createComponent(CreateAndUpdateVarietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
