import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrCreateFieldComponent } from './edit-or-create-field.component';

describe('EditOrCreateFieldComponent', () => {
  let component: EditOrCreateFieldComponent;
  let fixture: ComponentFixture<EditOrCreateFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditOrCreateFieldComponent]
    });
    fixture = TestBed.createComponent(EditOrCreateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
