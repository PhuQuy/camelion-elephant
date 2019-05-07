import { Component, Inject, Input  } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: "app-admin-tag-modal",
	templateUrl: "./tag-modal.component.html",
	styleUrls: ["./tag-modal.component.scss"]
})
export class TagModalComponent {
	constructor(public activeModal: NgbActiveModal) {}
	@Input() new;
	ngOnInit() {}

	
}
