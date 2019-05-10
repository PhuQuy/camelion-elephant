import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { Subject } from "rxjs";
import { ContactService } from "@services/contact.service";
@Component({
	selector: "app-admin-contacts",
	templateUrl: "./contacts.component.html",
	styleUrls: ["./contacts.component.scss"],
	providers: [ContactService]
})
export class ContactsComponent {
	closeResult: string;
	contacts;
	dtOptions = {};
	dtTrigger = new Subject();

	constructor(private modalService: NgbModal, private contactService: ContactService) { }

	ngOnInit() {
		this.contactService.getAll().subscribe(contacts => {
			this.contacts = contacts;
		})
	}

	onDelete(contact) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Contacts delete";
		modalRef.result.then(result => {
			if (result === 'ok') {
				this.contactService.delete(contact.id).then();
			}
		});
	}

	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
}
