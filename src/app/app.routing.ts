import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

export class AppCustomPreloader implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        return route.data && route.data.preload ? load() : of(null);
    }
}

const routes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    {
        path: "",
        loadChildren: "./layouts/clients/clients.module#ClientsModule"
    },
    {
        path: "user",
        loadChildren: "./layouts/user/user.module#UserModule"
    },
    {
        path: "admin",
        loadChildren: "./layouts/admin/admin.module#AdminModule"
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: "enabled"  })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
