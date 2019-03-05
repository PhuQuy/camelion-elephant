import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { ShareModule } from '@shared/share/share.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    NgxPaginationModule
  ],
  declarations: [PaginationComponent],
  exports: [PaginationComponent, NgxPaginationModule]
})
export class PaginationModule { }
