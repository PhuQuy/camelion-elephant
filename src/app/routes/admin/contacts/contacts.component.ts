import { Component, Inject, ViewChild } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { Subject, Subscription } from "rxjs";
import { ContactService } from "@services/contact.service";
import { DataTableDirective } from "angular-datatables";

@Component({
	selector: "app-admin-contacts",
	templateUrl: "./contacts.component.html",
	styleUrls: ["./contacts.component.scss"],
	providers: [ContactService]
})
export class ContactsComponent {
	closeResult: string;
	dtOptions = {};
	dtTrigger = new Subject();
	contacts: any[];
	sub: Subscription;
	index = 0;
    @ViewChild(DataTableDirective) dtElement: DataTableDirective;

	constructor(
		private modalService: NgbModal,
		private contactService: ContactService
	) {}

	ngOnInit() {
		this.getAll();
	}

	onDelete(contact) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Contacts delete";
		modalRef.result.then(result => {
			if (result === "ok") {
				this.contactService.delete(contact.id).then();
			}
		});
	}
	getAll() {
		this.sub = this.contactService.getAll().subscribe(contacts => {
			this.contacts = contacts;
			console.log('contacts', this.contacts);
			if (this.index == 0) {
				this.dtTrigger.next();
				this.index++;
			}else{
				this.rerender();
			}
		});
	}
	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
		this.sub.unsubscribe();
	}
	rerender = () => {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.destroy();
			this.dtTrigger.next();
		});
	};
}
