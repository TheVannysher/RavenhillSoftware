import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorItemComponent } from './navigator-item.component';

describe('NavigatorItemComponent', () => {
  let component: NavigatorItemComponent;
  let fixture: ComponentFixture<NavigatorItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigatorItemComponent]
    });
    fixture = TestBed.createComponent(NavigatorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
