import { Component, Inject } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
    selector: "app-admin-add-edit-blog",
    templateUrl: "./add-edit-blog.component.html",
    styleUrls: ["./add-edit-blog.component.scss"]
})
export class AddEditBlogComponent {

    blogForm: FormGroup;

    editor = ClassicEditor;
    tags = [
        { id: 1, name: "React" },
        { id: 2, name: "iOS" },
        { id: 3, name: "Java" }
    ];
    value = "";
    constructor() {}

    ngOnInit() {
        this.createForm();
    }

    addTag(name) {
        return { name: name, tag: true };
    }

    onChange(){
        
    }

    createForm() {
        this.blogForm = new FormGroup({
            title: new FormControl("", [Validators.required]),
            tags : new FormControl("", [Validators.required]),
            content : new FormControl("", [Validators.required])
        })
    }
}
