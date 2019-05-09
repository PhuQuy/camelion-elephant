import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribesComponent } from './subscribes.component';

const routes: Routes = [
    {
        path: '',
        component: SubscribesComponent,
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

export class SubscribesRoutingModule { }
