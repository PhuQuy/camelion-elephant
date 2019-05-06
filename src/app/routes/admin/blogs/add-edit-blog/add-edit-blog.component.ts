import { Component, Inject } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
@Component({
    selector: "app-admin-add-edit-blog",
    templateUrl: "./add-edit-blog.component.html",
    styleUrls: ["./add-edit-blog.component.scss"]
})
export class AddEditBlogComponent {
    editor = ClassicEditor;
    tags = [
        { id: 1, name: "React" },
        { id: 2, name: "iOS" },
        { id: 3, name: "Java" }
    ];
    value = "";
    constructor() {}

    ngOnInit() {}
    addTag(name) {
        return { name: name, tag: true };
    }
    onChange(){
        
    }
}
