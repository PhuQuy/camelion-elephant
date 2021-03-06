import { Component, Inject } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageModalComponent } from '../upload-image-modal/upload-image-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagService } from 'app/services/tag.service';
import { CategoryService } from 'app/services/category.service';
import { UploadService } from 'app/services/upload.service';
import { BlogService } from 'app/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { convertToSlug } from 'app/utils/util';
@Component({
    selector: 'app-admin-add-edit-blog',
    templateUrl: './add-edit-blog.component.html',
    styleUrls: ['./add-edit-blog.component.scss'],
    providers: [CategoryService, UploadService, TagService, BlogService]
})
export class AddEditBlogComponent {
    blogForm: FormGroup;
    images: any = [];
    tags;
    categories;
    value = '';
    options = {
        toolbar: [
            'bold',
            'italic',
            'heading-1',
            'heading-2',
            'heading-3',
            'code',
            'quote',
            'unordered-list',
            'ordered-list',
            {
                name: 'image',
                action: editor => {
                    this.openModalImage(editor);
                },
                className: 'fa fa-image',
                title: 'Upload Image'
            },
            'table',
            'link',
            'horizontal-rule',
            'preview',
            'side-by-side',
            'fullscreen',
            'guide'
        ]
    };
    imagePath;
    imgURL: any = '/assets/images/about.jpg';
    public message: string;
    id;
    edit: boolean = false;

    constructor(
        private modalService: NgbModal,
        private tagService: TagService,
        private categoryService: CategoryService,
        private upSvc: UploadService,
        private blogService: BlogService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            if (this.id !== 'new') {
                this.blogService.getById(this.id).subscribe(blog => {
                    this.blogForm.patchValue(blog);
                    if (blog.imgURL) {
                        this.imgURL = blog.imgURL;
                    }
                    this.edit = true;
                });
            } else {
                this.edit = false;
            }
        });
    }

    ngOnInit() {
        this.createForm();
        this.tagService.getAll().subscribe(tags => {
            this.tags = tags;
        });
        this.categoryService.getAll().subscribe(categories => {
            this.categories = categories;
        });
    }

    addTag(name) {
        return { name: name, tag: true };
    }
    openModalImage(editor) {
        const modalRef = this.modalService.open(UploadImageModalComponent);
        modalRef.result.then(result => {
            if (result) {
                const cm = editor.codemirror;
                const output = '![](' + result + ')';
                cm.replaceSelection(output);
            }
        });
    }

    onChange() {}

    preview(event) {
        const file = event.target.files.item(0);
        if (!file) { return; }
        const a = this.blogForm.get('imgURL').value;
        if (this.edit && this.blogForm.get('imgURL').value) {
            this.upSvc.deleteFileByURL(this.blogForm.get('imgURL').value);
        }
        const arr = file.name.split('.');
        this.upSvc
            .pushUpload(`Blogs`, file)
            .subscribe(res => {
                this.imgURL = res;
                this.blogForm.patchValue({ imgURL: res });
            });
    }

    createForm() {
        this.blogForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            tags: new FormControl('', [Validators.required]),
            content: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            published: new FormControl('', [Validators.required]),
            category: new FormControl('', [Validators.required]),
            imgURL: new FormControl('', [Validators.required])
        });
    }

    save() {
        const slug = convertToSlug(this.blogForm.value.title);
        if (this.edit) {
            this.blogService
                .update({ ...this.blogForm.value, id: this.id, slug: slug })
                .then(() => {
                    this.router.navigate(['/admin/blogs']);
                });
        } else {
            this.blogService.create({...this.blogForm.value, slug: slug}).then(() => {
                this.router.navigate(['/admin/blogs']);
            });
        }
    }
}
