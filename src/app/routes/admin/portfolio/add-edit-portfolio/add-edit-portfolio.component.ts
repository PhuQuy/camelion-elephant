import { Component, Inject } from "@angular/core";

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
	public selectedCompany ='';
	platformsData = [];
    portfolioForm: FormGroup;

    constructor(protected portfolioService: PortfolioService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if(id !== 'new') {
                this.portfolioService.getById(id).subscribe(portfolio => {
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
        console.log(this.portfolioForm.value);
        this.portfolioService.create(this.portfolioForm.value).then(result => {
            console.log(result);
            this.router.navigate(['/admin/portfolio']);
        })
    }
}
