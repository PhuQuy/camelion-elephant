import { Component, Inject } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { UploadImageModalComponent } from "../upload-image-modal/upload-image-modal.component";

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
    options = {
        toolbar: [
            "bold",
            "italic",
            "heading-1",
            "heading-2",
            "heading-3",
            "code",
            "quote",
            "unordered-list",
            "ordered-list",
            {
                name: "image",
                action: editor => {
                    this.openModalImage(editor);
                },
                className: "fa fa-image",
                title: "Upload Image"
            },
            "table",
            "link",
            "horizontal-rule",
            "preview",
            "side-by-side",
            "fullscreen",
            "guide"
        ]
    };
    imagePath;
    imgURL: any = "/assets/images/about.jpg";
    public message: string;

    constructor(private modalService: NgbModal) {}
    ngOnInit() {
        this.createForm();
    }

    addTag(name) {
        return { name: name, tag: true };
    }
    openModalImage(editor) {
        console.log("edittor", editor);
        const modalRef = this.modalService.open(UploadImageModalComponent);
        modalRef.result.then(result => {
            if (result) {
                console.log("result", result);
                let cm = editor.codemirror;
                let output = "![](" + result + ")";
                cm.replaceSelection(output);
            }
        });
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

    createForm() {
        this.blogForm = new FormGroup({
            title: new FormControl("", [Validators.required]),
            tags: new FormControl("", [Validators.required]),
            content: new FormControl("", [Validators.required])
        });
    }
}
