import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubscribesComponent } from "./subscribes.component";
import { ConfirmModalComponent } from '@components/admin/confirm-modal/confirm-modal.component';
import { SubscribesRoutingModule } from "./subscribes.routing";
import { ShareModule } from "@shared/share/share.module";
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
	imports: [
		CommonModule,
		ShareModule,
		SubscribesRoutingModule,
		DataTablesModule,
		NgbModule
	],
	declarations: [SubscribesComponent],
})
export class SubscribesModule {}
