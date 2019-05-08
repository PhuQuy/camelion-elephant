import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { Subject } from "rxjs";
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

	constructor(
		private modalService: NgbModal,
	) {}

	ngOnInit() {
	}

	onDelete(tag) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Contacts delete";
		modalRef.result.then(result => {
			if (result) {
				
			}
		});
	}

	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
}
