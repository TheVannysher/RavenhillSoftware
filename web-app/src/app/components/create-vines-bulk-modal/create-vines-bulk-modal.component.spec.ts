import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVinesBulkModalComponent } from './create-vines-bulk-modal.component';

describe('CreateVinesBulkModalComponent', () => {
  let component: CreateVinesBulkModalComponent;
  let fixture: ComponentFixture<CreateVinesBulkModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVinesBulkModalComponent]
    });
    fixture = TestBed.createComponent(CreateVinesBulkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
