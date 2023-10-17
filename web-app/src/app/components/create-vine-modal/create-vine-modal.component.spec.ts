import { ComponentFixture, TestBed } from '@angular/core/testing';

import CreateVineModalComponent from './create-vine-modal.component';

describe('CreateVineModalComponent', () => {
  let component: CreateVineModalComponent;
  let fixture: ComponentFixture<CreateVineModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVineModalComponent],
    });
    fixture = TestBed.createComponent(CreateVineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
