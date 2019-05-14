import { Component, Inject, ViewChild } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { TagService } from "app/services/tag.service";
import { Subject } from "rxjs";
import { SubscribeService } from "@services/subscribe.service";
import { DataTableDirective } from "angular-datatables";

@Component({
	selector: "app-admin-subscribes",
	templateUrl: "./subscribes.component.html",
	styleUrls: ["./subscribes.component.scss"],
	providers: [TagService]
})
export class SubscribesComponent {
	closeResult: string;
	subscribes;
	dtOptions = {};
	dtTrigger = new Subject();
	sub: any;
	index = 0;
	@ViewChild(DataTableDirective) dtElement: DataTableDirective;

	constructor(
		private modalService: NgbModal,
		protected subscribeService: SubscribeService
	) {}

	ngOnInit() {
		this.getAll();
	}

	getAll() {
		this.sub = this.subscribeService.getAll().subscribe(subscribes => {
			this.subscribes = subscribes;
			if (this.index == 0) {
				this.dtTrigger.next();
				this.index++;
			} else {
				this.rerender();
			}
		});
	}
	onDelete(subscribe) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Subscribe delete";
		modalRef.result.then(result => {
			if (result === "ok") {
				this.subscribeService.delete(subscribe.id);
			}
		});
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
	rerender = () => {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.destroy();
			this.dtTrigger.next();
		});
	};
}
