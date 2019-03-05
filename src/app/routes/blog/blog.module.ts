import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ShareModule } from '@shared/share/share.module';
import { BlogRoutingModule } from './blog.routing';
import { PaginationModule } from '@components/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ShareModule,
    PaginationModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
