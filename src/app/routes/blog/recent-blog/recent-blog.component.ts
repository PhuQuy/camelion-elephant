import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from "@services/blog.service";

@Component({
    selector: "app-recent-blog",
    templateUrl: "./recent-blog.component.html",
    styleUrls: ["./recent-blog.component.scss"],
    providers: [BlogService]
})
export class RecentBlogComponent extends BaseComponent implements OnInit {
    blogs=[];
    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private activatedRoute: ActivatedRoute,
        private blogService: BlogService
    ) {
        super(platformId);
    }
    ngOnInit() {
        this.blogService.getLimit(3).subscribe(blogs => {
            this.blogs = blogs;
        })
    }

    ngAfterViewInit() {
        this.initView();
    }

    
}
