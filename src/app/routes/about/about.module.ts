import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { ShareModule } from '@shared/share/share.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    AboutRoutingModule,
    CarouselModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
