import { Component, Inject, ViewChild } from "@angular/core";

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PortfolioService } from "app/services/portfolio.service";
import { Router, ActivatedRoute } from "@angular/router";
import { UploadService } from "app/services/upload.service";
@Component({
    selector: "app-admin-add-edit-portfolio",
    templateUrl: "./add-edit-portfolio.component.html",
    styleUrls: ["./add-edit-portfolio.component.scss"],
    providers: [PortfolioService, UploadService]
})
export class AddEditPortfolioComponent {
    public editor = ClassicEditor;
    public selectedCompany = '';
    platformsData = [];
    portfolioForm: FormGroup;
    id;
    @ViewChild("file") fileImage;
    imgURL;
    images: any = [];
    files = [];
    public edit = false;

    constructor(protected portfolioService: PortfolioService, private router: Router,
        private activatedRoute: ActivatedRoute, private upSvc: UploadService) {
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            if (this.id !== 'new') {
                this.portfolioService.getById(this.id).subscribe(portfolio => {
                    this.portfolioForm.patchValue(portfolio);
                    portfolio.images.map(img => {
                        this.images.push(img);
                    })
                    this.edit = true;
                })
            } else {
                this.edit = false;
            }
        })
    }

    ngOnInit() {
        this.createForm();
    }

    addTag(name) {
        return { name: name, tag: true };
    }

    createForm() {
        this.portfolioForm = new FormGroup({
            title: new FormControl("", [Validators.required]),
            platforms: new FormControl("", [Validators.required]),
            description: new FormControl("", [Validators.required])
        })
    }

    save() {
        if (this.edit) {
            this.portfolioService.update({ ...this.portfolioForm.value, id: this.id, images: this.images }).then(result => {
                this.router.navigate(['/admin/portfolio']);
            })
        } else {
            this.portfolioService.create({ ...this.portfolioForm.value, images: this.images }).then(result => {
                this.router.navigate(['/admin/portfolio']);
            })
        }
    }

    preview(event) {
        let files = event.target.files;
        if (files.length === 0) return;
        const that = this;
        for (let i = 0; i < files.length; i++) {
            this.upSvc.pushUpload(`Portfolio/${files[i].name}`, files[i]).subscribe(res => {
                this.images.push(res);
            })
        }
        this.fileImage.nativeElement.value = '';
    }

    deletePhoto(url, i) {
        this.upSvc.deleteFileByURL(url);
        this.images.splice(i, 1);
    }
}
