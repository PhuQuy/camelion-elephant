import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactsComponent } from "./contacts.component";
import { ConfirmModalComponent } from '@components/admin/confirm-modal/confirm-modal.component';

import { ContactsRoutingModule } from "./contacts.routing";

import { ShareModule } from "@shared/share/share.module";
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ContactService } from "@services/contact.service";
@NgModule({
	imports: [
		CommonModule,
		ShareModule,
		ContactsRoutingModule,
		DataTablesModule,
		NgbModule
	],
	declarations: [ContactsComponent],
	providers:[ContactService]
})
export class ContactsModule {}
