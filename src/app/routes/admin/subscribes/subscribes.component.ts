import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { TagService } from "app/services/tag.service";
import { Subject } from "rxjs";
@Component({
	selector: "app-admin-subscribes",
	templateUrl: "./subscribes.component.html",
	styleUrls: ["./subscribes.component.scss"],
	providers: [TagService]
})
export class SubscribesComponent {
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
	onDelete(tag){
		this.tagService.delete(tag.id);
	}
	

	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
}
