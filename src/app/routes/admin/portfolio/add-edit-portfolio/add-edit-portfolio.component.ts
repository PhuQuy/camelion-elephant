import { Component, Inject, ViewChild } from "@angular/core";

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PortfolioService } from "app/services/portfolio.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: "app-admin-add-edit-portfolio",
    templateUrl: "./add-edit-portfolio.component.html",
    styleUrls: ["./add-edit-portfolio.component.scss"],
    providers: [PortfolioService]
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

    constructor(protected portfolioService: PortfolioService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            if (this.id !== 'new') {
                this.portfolioService.getById(this.id).subscribe(portfolio => {
                    this.portfolioForm.patchValue(portfolio);
                })
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
        if (this.id === 'new') {
            this.portfolioService.create(this.portfolioForm.value).then(result => {
                this.router.navigate(['/admin/portfolio']);
            })
        } else {
            this.portfolioService.update({ ...this.portfolioForm.value, id: this.id }).then(result => {
                this.router.navigate(['/admin/portfolio']);
            })
        }
    }

    preview(files) {
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            let image = files[i];
            var mimeType = image.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = event => {
                this.id++;
                this.images.push({ id: this.id, url: event.target['result'] });
                console.log("image", this.images);
            };
        }
        this.fileImage.nativeElement.value = '';
    }

}
