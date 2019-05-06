import { Component, OnInit, Inject, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-admin-confirm-modal",
	templateUrl: "./confirm-modal.component.html",
	styleUrls: ["./confirm-modal.component.scss"]
})
export class ConfirmModalComponent implements OnInit {
	@Input() title;

	constructor(public activeModal: NgbActiveModal) {}

	ngOnInit() {}
}
