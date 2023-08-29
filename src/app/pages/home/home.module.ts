import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WeekdealsComponent } from './weekdeals/weekdeals.component';
import { HeroServicesComponent } from './hero-services/hero-services.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroOffersComponent } from './hero-offers/hero-offers.component';
import { FeaturedTopSellingOnSaleProductsComponent } from './featured-top-selling-on-sale-products/featured-top-selling-on-sale-products.component';
import { ProductCardComponent } from 'src/app/shared/lazy-loading/product-card/product-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    WeekdealsComponent,
    HeroServicesComponent,
    HeroBannerComponent,
    HeroOffersComponent,
    FeaturedTopSellingOnSaleProductsComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
