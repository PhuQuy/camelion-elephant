import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TagsComponent } from "./tags.component";
import { TagModalComponent } from "./tag-modal/tag-modal.component";
import { ConfirmModalComponent } from '@components/admin/confirm-modal/confirm-modal.component';

import { TagsRoutingModule } from "./tags.routing";

import { ShareModule } from "@shared/share/share.module";
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
	imports: [
		CommonModule,
		ShareModule,
		TagsRoutingModule,
		DataTablesModule,
		NgbModule
	],
	declarations: [TagsComponent, TagModalComponent],
	entryComponents: [TagModalComponent], 
})
export class TagsModule {}
