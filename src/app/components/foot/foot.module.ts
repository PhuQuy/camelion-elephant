import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './foot.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule //import AgmModule for child
  ],
  declarations: [FootComponent],
  exports: [FootComponent]
})
export class FootModule { }
