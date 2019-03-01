import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { ShareModule } from '@shared/share/share.module';
import { PortfolioRoutingModule } from './portfolio.routing';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ShareModule
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
