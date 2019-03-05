import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './foot.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    FormsModule
  ],
  declarations: [FootComponent],
  exports: [FootComponent]
})
export class FootModule { }
