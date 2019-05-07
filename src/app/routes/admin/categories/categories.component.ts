import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { CategoryModalComponent } from "./category-modal/category-modal.component";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";

@Component({
	selector: "app-admin-categories",
	templateUrl: "./categories.component.html",
	styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent {
	closeResult: string;

	constructor(private modalService: NgbModal) {}

	ngOnInit() {}

	onAdd() {
		const modalRef = this.modalService.open(CategoryModalComponent);
		modalRef.componentInstance.new = true;
	}
	onEdit(){
		const modalRef = this.modalService.open(CategoryModalComponent);
		modalRef.componentInstance.new = false;
	}
	onDelete(){
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = 'Category delete';
	}
}
