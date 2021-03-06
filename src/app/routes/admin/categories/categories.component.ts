import { Component, Inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { CategoryModalComponent } from "./category-modal/category-modal.component";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { CategoryService } from "app/services/category.service";
import { Subject } from "rxjs";
import { DataTableDirective } from "angular-datatables";

@Component({
	selector: "app-admin-categories",
	templateUrl: "./categories.component.html",
	styleUrls: ["./categories.component.scss"],
	providers: [CategoryService]
})
export class CategoriesComponent implements OnDestroy, OnInit {
	closeResult: string;
	categories;
	dtTrigger = new Subject();
	dtOptions = {};
	index = 0;
    @ViewChild(DataTableDirective) dtElement: DataTableDirective;

	constructor(
		private modalService: NgbModal,
		protected categoryService: CategoryService
	) {}

	ngOnInit() {
		this.getAll();
		this.dtOptions = {
			pagingType: "full_numbers"
		};
	}

	getAll() {
		this.categoryService.getAll().subscribe(categories => {
			this.categories = categories;
			if(this.index==0){
				this.dtTrigger.next();
				this.index ++;
			}else{
				this.rerender();
			}
		});
	}

	onAdd() {
		const modalRef = this.modalService.open(CategoryModalComponent);
		modalRef.componentInstance.new = true;
		modalRef.result.then(result => {
			if (result) {
				this.categoryService.create(result).then(() => {
					// this.getAll();
				});
			}
		});
	}

	onEdit(category) {
		const modalRef = this.modalService.open(CategoryModalComponent);
		modalRef.componentInstance.new = false;
		modalRef.componentInstance.category = category;
		modalRef.result.then(result => {
			if (result) {
				this.categoryService.update(result).then(() => {
					// this.getAll();
				});
			}
		});
	}

	onDelete(category) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Category delete";
		modalRef.result.then(result => {
			if (result) {
				this.categoryService.delete(category.id).then(() => {
					// this.getAll();
				});
			}
		});
	}
	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
	rerender = () => {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.destroy();
			this.dtTrigger.next();
		});
	};
}
