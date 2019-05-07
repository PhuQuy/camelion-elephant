import { Component, Inject, Input  } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: "app-admin-category-modal",
	templateUrl: "./category-modal.component.html",
	styleUrls: ["./category-modal.component.scss"]
})
export class CategoryModalComponent {
	constructor(public activeModal: NgbActiveModal) {}
	@Input() new;
	ngOnInit() {}

	
}
