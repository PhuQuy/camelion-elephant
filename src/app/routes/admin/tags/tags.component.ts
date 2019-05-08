import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { TagModalComponent } from "./tag-modal/tag-modal.component";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { TagService } from "app/services/tag.service";
import { Subject } from "rxjs";
@Component({
	selector: "app-admin-tags",
	templateUrl: "./tags.component.html",
	styleUrls: ["./tags.component.scss"],
	providers: [TagService]
})
export class TagsComponent {
	closeResult: string;
	tags;
	dtOptions = {};
	dtTrigger = new Subject();

	constructor(
		private modalService: NgbModal,
		protected tagService: TagService
	) {}

	ngOnInit() {
		this.getAll();
	}

	getAll() {
		this.tagService.getAll().subscribe(tags => {
			console.log(tags);
			this.tags = tags;
			this.dtTrigger.next();
		});
	}

	onAdd() {
		const modalRef = this.modalService.open(TagModalComponent);
		modalRef.componentInstance.new = true;
		modalRef.result.then(result => {
			if (result) {
				this.tagService.create(result).then(() => {
					this.getAll();
				});
			}
		});
	}

	onEdit(tag) {
		const modalRef = this.modalService.open(TagModalComponent);
		modalRef.componentInstance.new = false;
		modalRef.componentInstance.tag = tag;
		modalRef.result.then(result => {
			if (result) {
				console.log(result);

				this.tagService.update(result).then(() => {
					this.getAll();
				});
			}
		});
	}

	onDelete(tag) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Tag delete";
		modalRef.result.then(result => {
			if (result) {
				this.tagService.delete(tag.id).then(() => {
					this.getAll();
				});
			}
		});
	}

	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
}
