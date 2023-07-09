import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTopSellingOnSaleProductsComponent } from './featured-top-selling-on-sale-products.component';

describe('FeaturedTopSellingOnSaleProductsComponent', () => {
  let component: FeaturedTopSellingOnSaleProductsComponent;
  let fixture: ComponentFixture<FeaturedTopSellingOnSaleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedTopSellingOnSaleProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedTopSellingOnSaleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
