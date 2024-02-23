import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleModalComponent } from './edit-sample-modal.component';

describe('EditSampleModalComponent', () => {
  let component: EditSampleModalComponent;
  let fixture: ComponentFixture<EditSampleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSampleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSampleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
