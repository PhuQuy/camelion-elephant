import { Component, OnInit, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { PaginationInstance } from 'ngx-pagination';
import { SeoService } from '@shared/seo.service';
import { BlogService } from "@services/blog.service";

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    providers: [BlogService]

})
export class BlogComponent extends BaseComponent implements OnInit {
    searchBlog: string = '';
    config: PaginationInstance = {
        id: 'comment',
        itemsPerPage: 6,
        currentPage: 1
    };
    @ViewChild('blogHeader') blogHeader: ElementRef;

    blogs = [];
    constructor(@Inject(PLATFORM_ID) public platformId: string, private seoService: SeoService, private blogService: BlogService) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: ' Blog',
            description: 'Liên hệ Vay vốn sinh viên',
            slug: 'blog',
            keywords: 'vay von sinh vien'
        });
        this.blogService.getAll().subscribe(blogs => {
            this.blogs = blogs;
            console.log('blogs', this.blogs);
            
        })
    }

    clearSearch() {
        this.searchBlog = '';
    }

    ngAfterViewInit() {
        this.initView();
    }

    pageChange(page) {
        this.blogHeader.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

}