import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { WeekdelsComponent } from './weekdels/weekdels.component';
import { WeekdealsComponent } from './weekdeals/weekdeals.component';
import { HeroServicesComponent } from './hero-services/hero-services.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroOffersComponent } from './hero-offers/hero-offers.component';
import { FeaturedTopSellingOnSaleProductsComponent } from './featured-top-selling-on-sale-products/featured-top-selling-on-sale-products.component';



@NgModule({
  declarations: [
    HomeComponent,
    // WeekdelsComponent,
    WeekdealsComponent,
    HeroServicesComponent,
    HeroBannerComponent,
    HeroOffersComponent,
    FeaturedTopSellingOnSaleProductsComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
