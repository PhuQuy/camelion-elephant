import { Component, Inject } from "@angular/core";

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
    selector: "app-admin-add-edit-portfolio",
    templateUrl: "./add-edit-portfolio.component.html",
    styleUrls: ["./add-edit-portfolio.component.scss"]
})
export class AddEditPortfolioComponent {
	public editor = ClassicEditor;
	public selectedCompany ='';
	platforms = [{ id: 1, name: "Android" },{ id: 2, name: "iOS" },{ id: 3, name: "Java" }];

    constructor() {}

    ngOnInit() {}

    addTag(name) {
        return { name: name, tag: true };
    }
}
