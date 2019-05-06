import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioComponent } from "./portfolio.component";
import { AddEditPortfolioComponent } from "./add-edit-portfolio/add-edit-portfolio.component";
import { PortfolioRoutingModule } from "./portfolio.routing";

import { ShareModule } from "@shared/share/share.module";
import { DataTablesModule } from "angular-datatables";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
	imports: [
		CommonModule,
		ShareModule,
		PortfolioRoutingModule,
		DataTablesModule,
		NgSelectModule
	],
	declarations: [PortfolioComponent, AddEditPortfolioComponent]
})
export class PortfolioModule {}
