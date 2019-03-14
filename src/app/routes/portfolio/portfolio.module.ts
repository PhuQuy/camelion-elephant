import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { ShareModule } from '@shared/share/share.module';
import { PortfolioRoutingModule } from './portfolio.routing';
import { PaginationModule } from '@components/pagination/pagination.module';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    PaginationModule,
    ShareModule
  ],
  declarations: [PortfolioComponent, PortfolioDetailComponent]
})
export class PortfolioModule { }
