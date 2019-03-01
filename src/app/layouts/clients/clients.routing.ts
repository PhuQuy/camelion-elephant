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
            },
            { 
                path: 'about-us', 
                loadChildren: "../../routes/about/about.module#AboutModule"
            },
            { 
                path: 'blog', 
                loadChildren: "../../routes/blog/blog.module#BlogModule"
            },
            { 
                path: 'portfolio', 
                loadChildren: "../../routes/portfolio/portfolio.module#PortfolioModule"
            },
            { 
                path: 'contact', 
                loadChildren: "../../routes/contact/contact.module#ContactModule"
            },
            { 
                path: 'solution', 
                loadChildren: "../../routes/solution/solution.module#SolutionModule"
            }
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
