import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { AuthGuard } from '@core/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [
            {
                path: '',
                loadChildren: `../../routes/home/home.module#HomeModule`,
                data: { preload: true }
            },
            {
                path: 'about-us',
                loadChildren: '../../routes/about/about.module#AboutModule'
            },
            {
                path: 'blog',
                loadChildren: '../../routes/blog/blog.module#BlogModule'
            },
            {
                path: 'portfolio',
                loadChildren: '../../routes/portfolio/portfolio.module#PortfolioModule'
            },
            {
                path: 'contact',
                loadChildren: '../../routes/contact/contact.module#ContactModule'
            },
            {
                path: 'solution',
                loadChildren: '../../routes/solution/solution.module#SolutionModule'
            },
            {
                path: 'login',
                loadChildren: '../user/login/login.module#LoginModule'
            },
            {
                path: 'not-found',
                loadChildren: '../../routes/not-found/not-found.module#NotFoundModule'
            }
        ],
    },
    { path: 'seo', redirectTo: '', pathMatch: 'full' },
    { path: 'seo/about-us', redirectTo: 'about-us', pathMatch: 'full' },
    { path: 'seo/blog', redirectTo: 'blog', pathMatch: 'full' },
    { path: 'seo/blog/:id', redirectTo: 'blog/:id', pathMatch: 'full' },
    { path: 'seo/portfolio', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: 'seo/portfolio/:id', redirectTo: 'portfolio/:id', pathMatch: 'full' },
    { path: 'seo/contact', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'seo/solution', redirectTo: 'solution', pathMatch: 'full' }

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
