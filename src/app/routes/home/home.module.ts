import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ShareModule } from '@shared/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }