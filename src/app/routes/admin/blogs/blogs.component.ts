import { Component, Inject } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { BlogService } from "app/services/blog.service";

@Component({
    selector: "app-admin-blogs",
    templateUrl: "./blogs.component.html",
    styleUrls: ["./blogs.component.scss"],
    providers: [BlogService]
})
export class BlogsComponent {

    blogs;
    date;

    constructor(private modalService: NgbModal, private blogService: BlogService) { }

    ngOnInit() {
        this.blogService.getAll().subscribe(blogs => {
            this.blogs = blogs;
            
            
        })
    }

    onDelete(blog) {
        const modalRef = this.modalService.open(ConfirmModalComponent);
        modalRef.componentInstance.title = 'Blog delete';
        modalRef.result.then(result => {
            if (result === 'ok') {
                this.blogService.delete(blog.id).then();
            }
        })
    }
}
