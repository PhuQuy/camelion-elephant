import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { ShareModule } from '@shared/share/share.module';
import { NotFoundRoutingModule } from './not-found.routing';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    ShareModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
