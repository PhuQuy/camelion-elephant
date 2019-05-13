import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './foot.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { SubscribeService } from '@services/subscribe.service';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    FormsModule,
    RouterModule
  ],
  declarations: [FootComponent],
  providers:[SubscribeService],
  exports: [FootComponent]
})
export class FootModule { }
