import { Component, Inject, ViewChild } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { BlogService } from "app/services/blog.service";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

@Component({
    selector: "app-admin-blogs",
    templateUrl: "./blogs.component.html",
    styleUrls: ["./blogs.component.scss"],
    providers: [BlogService]
})
export class BlogsComponent {
    blogs;
    date;
    @ViewChild(DataTableDirective) dtElement: DataTableDirective;
    dtTrigger = new Subject();
    index = 0;
    constructor(
        private modalService: NgbModal,
        private blogService: BlogService
    ) {}

    ngOnInit() {
        this.blogService.getAll().subscribe(blogs => {
            this.blogs = blogs;
            if (this.index == 0) {
                this.dtTrigger.next();
                this.index++;
            } else {
                this.rerender();
            }
        });
    }

    onDelete(blog) {
        const modalRef = this.modalService.open(ConfirmModalComponent);
        modalRef.componentInstance.title = "Blog delete";
        modalRef.result.then(result => {
            if (result === "ok") {
                this.blogService.delete(blog.id).then();
            }
        });
    }
    rerender = () => {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
        });
    };
}
