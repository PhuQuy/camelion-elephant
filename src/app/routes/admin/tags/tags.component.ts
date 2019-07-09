import { Component, Inject, ViewChild } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { TagModalComponent } from "./tag-modal/tag-modal.component";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { TagService } from "app/services/tag.service";
import { Subject } from "rxjs";
import { DataTableDirective } from "angular-datatables";
@Component({
	selector: "app-admin-tags",
	templateUrl: "./tags.component.html",
	styleUrls: ["./tags.component.scss"],
	providers: [TagService]
})
export class TagsComponent {
	closeResult: string;
	tags;
	dtOptions: DataTables.Settings = {};
	dtTrigger = new Subject();
	@ViewChild(DataTableDirective) dtElement: DataTableDirective;
	constructor(
		private modalService: NgbModal,
		protected tagService: TagService
	) {}

	ngOnInit() {
		this.dtOptions = {
			pagingType: "full_numbers"
		};
		this.getAll();
	}
	index = 0;
	getAll() {
		this.tagService.getAll().subscribe(tags => {
			this.tags = tags;
			if (this.index == 0) {
				this.index ++;
				this.dtTrigger.next();
			} else {
				this.rerender();
			}
		});
	}
	rerender = () => {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.destroy();
			this.dtTrigger.next();
		});
	};

	onAdd() {
		const modalRef = this.modalService.open(TagModalComponent);
		modalRef.componentInstance.new = true;
		modalRef.result.then(result => {
			if (result) {
				this.tagService.create(result).then(() => {});
			}
		});
	}

	onEdit(tag) {
		const modalRef = this.modalService.open(TagModalComponent);
		modalRef.componentInstance.new = false;
		modalRef.componentInstance.tag = tag;
		modalRef.result.then(result => {
			if (result) {
				this.tagService.update(result).then(() => {});
			}
		});
	}

	onDelete(tag) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Tag delete";
		modalRef.result.then(result => {
			if (result) {
				this.tagService.delete(tag.id).then(() => {});
			}
		});
	}

	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
}
