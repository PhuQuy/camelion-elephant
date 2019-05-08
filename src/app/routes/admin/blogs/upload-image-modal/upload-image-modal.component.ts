import { Component, Inject, Input  } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: "app-admin-upload-image-modal",
    templateUrl: "./upload-image-modal.component.html",
    styleUrls: ["./upload-image-modal.component.scss"]
})
export class UploadImageModalComponent {
    constructor(public activeModal: NgbActiveModal) {}
    ngOnInit() {}

    
}
