import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [
            { 
                path: '', 
                loadChildren: "../../routes/home/home.module#HomeModule"
            }
            // { path: 'contact-us', component: ContactUsComponent },
            // { path: 'news', loadChildren: './../../routes/news/news.module#NewsModule' },
            // {
            //     path: 'form',
            //     loadChildren: './../../routes/submit-form/submit-form.module#SubmitFormModule'
            // },
            // {
            //     path: 'chat',
            //     loadChildren: './../../routes/chat/chat.module#ChatModule'
            // },
        ]
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

export class ClientsRoutingModule { }
