import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ShareModule } from '@shared/share/share.module';
import { BlogRoutingModule } from './blog.routing';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ShareModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
