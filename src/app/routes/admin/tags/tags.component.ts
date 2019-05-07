import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { TagModalComponent } from "./tag-modal/tag-modal.component";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";

@Component({
	selector: "app-admin-tags",
	templateUrl: "./tags.component.html",
	styleUrls: ["./tags.component.scss"]
})
export class TagsComponent {
	closeResult: string;

	constructor(private modalService: NgbModal) {}

	ngOnInit() {}

	onAdd() {
		const modalRef = this.modalService.open(TagModalComponent);
		modalRef.componentInstance.new = true;
	}
	onEdit(){
		const modalRef = this.modalService.open(TagModalComponent);
		modalRef.componentInstance.new = false;
	}
	onDelete(){
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = 'Tag delete';
	}
}
