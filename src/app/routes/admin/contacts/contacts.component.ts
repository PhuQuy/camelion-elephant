import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { Subject, Subscription } from "rxjs";
import { ContactService } from "@services/contact.service";
@Component({
	selector: "app-admin-contacts",
	templateUrl: "./contacts.component.html",
	styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent {
	closeResult: string;
	tags;
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

	onDelete(tag) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Contacts delete";
		modalRef.result.then(result => {
			if (result) {
				
			}
		});
	}
	getAll(){
		this.sub = this.contactService.getAll().subscribe(contacts =>{
			this.contacts = contacts
		})
	}
	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
		this.sub.unsubscribe();
	}
}
