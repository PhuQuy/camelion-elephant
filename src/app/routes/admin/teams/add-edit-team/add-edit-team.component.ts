import { Component, Inject, ViewChild } from "@angular/core";

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PortfolioService } from "app/services/portfolio.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: "app-admin-add-edit-team",
    templateUrl: "./add-edit-team.component.html",
    styleUrls: ["./add-edit-team.component.scss"],
    providers: [PortfolioService]
})
export class AddEditTeamComponent {
    public editor = ClassicEditor;
    public selectedCompany = '';
    platformsData = [];
    portfolioForm: FormGroup;
    id;
    @ViewChild("file") fileImage;
    imgURL = '/assets/images/person_1.jpg';

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
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = _event => {
            this.imgURL = reader.result;
        };
    }

}
