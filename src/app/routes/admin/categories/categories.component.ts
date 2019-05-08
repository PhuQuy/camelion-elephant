import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { CategoryModalComponent } from "./category-modal/category-modal.component";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { CategoryService } from "app/services/category.service";

@Component({
	selector: "app-admin-categories",
	templateUrl: "./categories.component.html",
	styleUrls: ["./categories.component.scss"],
	providers: [CategoryService]
})
export class CategoriesComponent {
	closeResult: string;
	categories;
	
	constructor(private modalService: NgbModal, protected categoryService: CategoryService) {}

	ngOnInit() {
		this.getAll();
	}

	getAll() {
		this.categoryService.getAll().subscribe(categories => {
			this.categories = categories;
		})
	}

	onAdd() {
		const modalRef = this.modalService.open(CategoryModalComponent);
		modalRef.componentInstance.new = true;
		modalRef.result.then(result => {
			if (result) {
				this.categoryService.create(result).then(() => {
					this.getAll();
				});
			}
		})
	}

	onEdit(category){
		const modalRef = this.modalService.open(CategoryModalComponent);
		modalRef.componentInstance.new = false;
		modalRef.componentInstance.category = category;
		modalRef.result.then(result => {
			if (result) {
				this.categoryService.update(result).then(() => {
					this.getAll();
				});
			}
		})
	}

	onDelete(category){
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = 'Category delete';
		modalRef.result.then(result => {
			if (result) {
				this.categoryService.delete(category.id).then(() => {
					this.getAll();
				});
			}
		})
	}
}