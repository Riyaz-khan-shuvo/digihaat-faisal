import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WeekdelsComponent } from './weekdels/weekdels.component';
import { WeekdealsComponent } from './weekdeals/weekdeals.component';



@NgModule({
  declarations: [
    HomeComponent,
    WeekdelsComponent,
    WeekdealsComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
