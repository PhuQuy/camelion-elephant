import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ShareModule } from '@shared/share/share.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaginationModule } from '@components/pagination/pagination.module';
// import { Ng2OdometerModule } from 'ng2-odometer';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule,
    CarouselModule,
    PaginationModule
    // Ng2OdometerModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
