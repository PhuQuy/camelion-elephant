import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { Subject, Subscription } from "rxjs";
import { ContactService } from "@services/contact.service";
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
			if (result === 'ok') {
				this.contactService.delete(contact.id).then();
			}
		});
	}
	getAll(){
		this.sub = this.contactService.getAll().subscribe(contacts =>{
			this.contacts = contacts;
			this.dtTrigger.next();
		})
	}
	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
		this.sub.unsubscribe();
	}
}
