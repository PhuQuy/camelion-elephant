import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { AddEditBlogComponent } from './add-edit-blog/add-edit-blog.component';

const routes: Routes = [
    {
        path: '',
        component: BlogsComponent,

    },{
        path: ':id',
        component: AddEditBlogComponent
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

export class BlogsRoutingModule { }
