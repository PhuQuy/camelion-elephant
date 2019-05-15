import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriesComponent } from "./categories.component";
import { CategoryModalComponent } from "./category-modal/category-modal.component";
import { ConfirmModalComponent } from '@components/admin/confirm-modal/confirm-modal.component';

import { CategoriesRoutingModule } from "./categories.routing";

import { ShareModule } from "@shared/share/share.module";
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
	imports: [
		CommonModule,
		ShareModule,
		CategoriesRoutingModule,
		DataTablesModule,
		NgbModule
	],
	declarations: [CategoriesComponent, CategoryModalComponent],
	entryComponents: [CategoryModalComponent], 
})
export class CategoriesModule {}
