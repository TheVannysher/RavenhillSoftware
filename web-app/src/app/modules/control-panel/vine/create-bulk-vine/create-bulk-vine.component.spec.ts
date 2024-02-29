import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBulkVineComponent } from './create-bulk-vine.component';

describe('CreateBulkVineComponent', () => {
  let component: CreateBulkVineComponent;
  let fixture: ComponentFixture<CreateBulkVineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBulkVineComponent],
    });
    fixture = TestBed.createComponent(CreateBulkVineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
