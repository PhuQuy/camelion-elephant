import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeamsComponent } from "./teams.component";
import { AddEditTeamComponent } from "./add-edit-team/add-edit-team.component";
import { TeamsRoutingModule } from "./teams.routing";

import { ShareModule } from "@shared/share/share.module";
import { DataTablesModule } from "angular-datatables";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
	imports: [
		CommonModule,
		ShareModule,
		TeamsRoutingModule,
		DataTablesModule,
		NgSelectModule
	],
	declarations: [TeamsComponent, AddEditTeamComponent]
})
export class TeamsModule {}
