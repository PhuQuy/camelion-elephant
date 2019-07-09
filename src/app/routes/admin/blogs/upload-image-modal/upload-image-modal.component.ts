import { Component, Inject, Input, ViewChild } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UploadService } from "@services/upload.service";
import { ImageService } from "@services/image.service";

@Component({
	selector: "app-admin-upload-image-modal",
	templateUrl: "./upload-image-modal.component.html",
	styleUrls: ["./upload-image-modal.component.scss"],
	providers: [UploadService, ImageService]
})
export class UploadImageModalComponent {
	images: any = [];

	@ViewChild("file") fileImage;

	constructor(
		public activeModal: NgbActiveModal,
		private upSvc: UploadService,
		private imageService: ImageService
	) {}
	ngOnInit() {
		this.imageService.getAll().subscribe(images => {
			this.images = images;
		})
	}

	preview(event) {
		let files = event.target.files;
		if (files.length === 0) return;
		const that = this;
		for (let i = 0; i < files.length; i++) {
			this.upSvc
				.pushUpload(`Images`, files[i])
				.subscribe(res => {
					this.imageService
						.create({ url: res })
						.then(result => {});
				});
		}
		this.fileImage.nativeElement.value = "";
	}
	deletePhoto(image) {
        this.imageService.delete(image.id).then(()=>{
        	this.upSvc.deleteFileByURL(image.url);
        }).catch(err=>{
        })
    }
    onSelectImage(url){
    	this.activeModal.close(url);
    }
}
