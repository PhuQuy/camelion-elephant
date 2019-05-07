import { Component, Inject } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";

@Component({
	selector: "app-portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent {
	constructor(private modalService: NgbModal) {}

	ngOnInit() {}

	onDelete() {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Portfolio delete";
	}
}
