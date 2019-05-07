import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "@core/auth.guard";

const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
            {
                path: "dashboard",
                loadChildren:
                    "../../routes/admin/dashboard/dashboard.module#DashboardModule",
                    canActivate: [AuthGuard]
            },
            {
                path: "portfolio",
                loadChildren:
                    "../../routes/admin/portfolio/portfolio.module#PortfolioModule",
                    canActivate: [AuthGuard]
            },
            {
                path: "blogs",
                loadChildren:
                    "../../routes/admin/blogs/blogs.module#BlogsModule",
                    canActivate: [AuthGuard]
            },
            {
                path: "tags",
                loadChildren: "../../routes/admin/tags/tags.module#TagsModule",
                canActivate: [AuthGuard]
            },
            {
                path: "categories",
                loadChildren: "../../routes/admin/categories/categories.module#CategoriesModule",
                canActivate: [AuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
