import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdealsComponent } from './weekdeals.component';

describe('WeekdealsComponent', () => {
  let component: WeekdealsComponent;
  let fixture: ComponentFixture<WeekdealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekdealsComponent]
    });
    fixture = TestBed.createComponent(WeekdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
