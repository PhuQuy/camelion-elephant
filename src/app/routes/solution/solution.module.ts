import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution.component';
import { ShareModule } from '@shared/share/share.module';
import { SolutionRoutingModule } from './solution.routing';

@NgModule({
  imports: [
    CommonModule,
    SolutionRoutingModule,
    ShareModule
  ],
  declarations: [SolutionComponent]
})
export class SolutionModule { }
