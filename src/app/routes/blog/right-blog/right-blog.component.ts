import { Component, OnInit, PLATFORM_ID, Inject, Input,Output,EventEmitter } from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from "@services/blog.service";
import { TagService } from "@services/tag.service";
import { CategoryService } from "@services/category.service";

@Component({
    selector: "app-right-blog",
    templateUrl: "./right-blog.component.html",
    styleUrls: ["./right-blog.component.scss"],
    providers: [BlogService, TagService, CategoryService]
})
export class RightBlogComponent extends BaseComponent implements OnInit {
    blogs = [];
    tags = [];
    categories = [];
    @Input() searchBlog;
    @Output() updateSearch = new EventEmitter();
    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private activatedRoute: ActivatedRoute,
        private blogService: BlogService,
        private tagService: TagService,
        private categoryService: CategoryService
    ) {
        super(platformId);
    }

    ngOnInit() {
        this.blogService.getLimit(3).subscribe(blogs => {
            this.blogs = blogs;
        });
        this.tagService.getAll().subscribe(tags => {
            this.tags = tags;
        });
        this.categoryService.getAll().subscribe(categories => {
            this.categories = categories;
        });
    }
    onSearch(){
        this.updateSearch.emit(this.searchBlog);
    }

    ngAfterViewInit() {
        this.initView();
    }
}
