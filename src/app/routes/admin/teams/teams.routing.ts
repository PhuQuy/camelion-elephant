import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { AddEditTeamComponent } from './add-edit-team/add-edit-team.component';

const routes: Routes = [
    {
        path: '',
        component: TeamsComponent
    },
    {
        path: ':id',
        component: AddEditTeamComponent
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

export class TeamsRoutingModule { }
