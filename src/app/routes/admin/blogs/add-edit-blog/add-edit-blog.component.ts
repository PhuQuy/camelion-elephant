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

    public imagePath;
    imgURL: any ='/assets/images/about.jpg';
    public message: string;
    constructor() {}

    ngOnInit() {}
    
    addTag(name) {
        return { name: name, tag: true };
    }
    onChange() {}

    preview(files) {
        if (files.length === 0) return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = _event => {
            this.imgURL = reader.result;
        };
    }
}
