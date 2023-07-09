import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroOffersComponent } from './hero-offers.component';

describe('HeroOffersComponent', () => {
  let component: HeroOffersComponent;
  let fixture: ComponentFixture<HeroOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
