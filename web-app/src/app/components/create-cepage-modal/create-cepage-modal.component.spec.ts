import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCepageModalComponent } from './create-cepage-modal.component';

describe('CreateCepageModalComponent', () => {
  let component: CreateCepageModalComponent;
  let fixture: ComponentFixture<CreateCepageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCepageModalComponent]
    });
    fixture = TestBed.createComponent(CreateCepageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
