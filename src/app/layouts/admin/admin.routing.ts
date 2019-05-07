import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
            {
                path: "dashboard",
                loadChildren:
                    "../../routes/admin/dashboard/dashboard.module#DashboardModule"
            },
            {
                path: "portfolio",
                loadChildren:
                    "../../routes/admin/portfolio/portfolio.module#PortfolioModule"
            },
            {
                path: "blogs",
                loadChildren:
                    "../../routes/admin/blogs/blogs.module#BlogsModule"
            },
            {
                path: "tags",
                loadChildren: "../../routes/admin/tags/tags.module#TagsModule"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
