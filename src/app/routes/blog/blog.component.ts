import {
  Component,
  OnInit,
  PLATFORM_ID,
  Inject,
  ViewChild,
  ElementRef
} from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { PaginationInstance } from "ngx-pagination";
import { SeoService } from "@shared/seo.service";
import { BlogService } from "@services/blog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService } from "@components/spinner/spinner.service";

@Component({
  selector: "blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  providers: [BlogService]
})
export class BlogComponent extends BaseComponent implements OnInit {
  searchBlog: string = "";
  config: PaginationInstance = {
    id: "comment",
    itemsPerPage: 6,
    currentPage: 1
  };
  @ViewChild("blogHeader") blogHeader: ElementRef;

  blogs = [];
  category: string;
  search: string;
  constructor(
    @Inject(PLATFORM_ID) public platformId: string,
    private seoService: SeoService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {
    super(platformId);
  }

  ngOnInit() {
    this.seoService.generateTags({
      title: " Blog",
      slug: "blog"
    });
    this.spinnerService.show();
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("params", params);
      this.category = params.category;
      this.search = params.search;
      this.blogService.getAll().subscribe(blogs => {
        this.spinnerService.hide();
        console.log("Blogs", blogs);
        if (this.category != "" && this.category) {
          this.blogs = blogs.filter(blog => {
            return blog.category.find(item => {
              return item.name == this.category;
            });
          });
        } else if (this.search != "" && this.search) {
          this.blogs = blogs.filter(blog => {
            return (
              blog.title.toLowerCase().search(this.search.toLowerCase()) > -1
            );
          });
        } else {
          this.blogs = blogs;
        }
      });
    });
  }

  clearSearch() {
    this.searchBlog = "";
  }
  updateSearch(event) {
    console.log("event", event);
    this.searchBlog = event;
  }

  ngAfterViewInit() {
    this.initView();
  }

  pageChange(page) {
    this.blogHeader.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}
