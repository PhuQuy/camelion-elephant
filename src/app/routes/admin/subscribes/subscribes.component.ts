import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { TagService } from "app/services/tag.service";
import { Subject } from "rxjs";
import { SubscribeService } from "@services/subscribe.service";
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

	constructor(
		private modalService: NgbModal,
		protected subscribeService: SubscribeService
	) {}

	ngOnInit() {
		this.getAll();
	}

	getAll() {
		this.sub = this.subscribeService.getAll().subscribe(subscribes => {
			//console.log(subscribes);
			this.subscribes = subscribes;
		});
	}
	onDelete(subscribe){
		this.subscribeService.delete(subscribe.id);
	}
	

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
}
