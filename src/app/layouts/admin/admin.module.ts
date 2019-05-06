import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { SidebarComponent } from "@components/admin/sidebar/sidebar.component";
import { NavbarComponent } from "@components/admin/navbar/navbar.component";
import { AdminRoutingModule } from "./admin.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";

@NgModule({
	imports: [CommonModule, AdminRoutingModule, NgbModule],
	declarations: [
		AdminComponent,
		SidebarComponent,
		NavbarComponent,
		ConfirmModalComponent
	],
	exports: [AdminRoutingModule],
	entryComponents: [ConfirmModalComponent]
})
export class AdminModule {}
