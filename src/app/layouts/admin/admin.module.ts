import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { SidebarComponent } from "@components/admin/sidebar/sidebar.component";
import { NavbarComponent } from "@components/admin/navbar/navbar.component";
import { AdminRoutingModule } from "./admin.routing";

@NgModule({
	imports: [CommonModule, AdminRoutingModule],
	declarations: [AdminComponent, SidebarComponent, NavbarComponent],
	exports: [AdminRoutingModule]
})
export class AdminModule {}
