import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ShareModule } from '@shared/share/share.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng2OdometerModule } from 'ng2-odometer';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule,
    CarouselModule,
    Ng2OdometerModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
