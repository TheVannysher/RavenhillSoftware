import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinesListComponent } from './vines-list.component';

describe('VinesListComponent', () => {
  let component: VinesListComponent;
  let fixture: ComponentFixture<VinesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VinesListComponent]
    });
    fixture = TestBed.createComponent(VinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
