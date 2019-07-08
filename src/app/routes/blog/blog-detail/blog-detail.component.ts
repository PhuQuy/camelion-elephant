import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from "app/services/blog.service";
import { SeoService } from "@shared/seo.service";
import { environment } from "@env/environment";

@Component({
  selector: "blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.scss"],
  providers: [BlogService, SeoService]
})
export class BlogDetailComponent extends BaseComponent implements OnInit {
  id;
  blog;
  blogs = [];
  constructor(
    @Inject(PLATFORM_ID) public platformId: string,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private seoService: SeoService
  ) {
    super(platformId);
  }

  ngAfterViewInit() {
    this.initView();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
      this.blogService.getBySlug(this.id).subscribe(blogs => {
        console.log("Blog", blogs);
        this.blog = blogs[0];
        const keywords = this.blog.tags.reduce(
          (acc, tag) => acc + ', '+ tag.name,
          ""
        );
        this.seoService.generateTags({
          title: this.blog.title + " - Blog",
          description: this.blog.description ||'',
          slug: this.blog.slug,
          keywords: keywords,
          image: this.blog.imgURL,
          url: `${environment.domain}/blog/${this.blog.slug}`
        });
      });
    });
    this.blogService.getLimit(3).subscribe(blogs => {
      this.blogs = blogs;
    });
  }
}
