import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";

@Component({
    selector: "app-admin-blogs",
    templateUrl: "./blogs.component.html",
    styleUrls: ["./blogs.component.scss"]
})
export class BlogsComponent {
    constructor(private modalService: NgbModal) {}

    ngOnInit() {}

    onDelete(){
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = 'Blog delete';
	}
}
