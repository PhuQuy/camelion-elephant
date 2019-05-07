import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { AddEditPortfolioComponent } from './add-edit-portfolio/add-edit-portfolio.component';

const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent
    },
    {
        path: ':id',
        component: AddEditPortfolioComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class PortfolioRoutingModule { }
