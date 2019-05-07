import { Component, Inject, ViewChild } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
@Component({
    selector: "app-admin-add-edit-portfolio",
    templateUrl: "./add-edit-portfolio.component.html",
    styleUrls: ["./add-edit-portfolio.component.scss"]
})
export class AddEditPortfolioComponent {
    editor = ClassicEditor;
    selectedCompany = "";
    @ViewChild("file") fileImage;
    platforms = [
        { id: 1, name: "Android" },
        { id: 2, name: "iOS" },
        { id: 3, name: "Java" }
    ];
    imgURL;
    images: any = [];

    id = 0;

    constructor() {}

    ngOnInit() {}

    addTag(name) {
        return { name: name, tag: true };
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
                this.images.push({ id: this.id, url: event.target.result });
                console.log("image", this.images);
            };
        }
        this.fileImage.nativeElement.value = ''
    }
}
