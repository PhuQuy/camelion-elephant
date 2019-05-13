import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './foot.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule }   from '@angular/forms';
import { TagService } from '@services/tag.service';

import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    FormsModule,
    RouterModule
  ],
  declarations: [FootComponent],
  providers:[TagService],
  exports: [FootComponent]
})
export class FootModule { }
