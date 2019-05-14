import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { ActivatedRoute, Router } from "@angular/router";
import { PortfolioService } from "@services/portfolio.service";
import { SeoService } from "@shared/seo.service";
import {
    NgxGalleryOptions,
    NgxGalleryImage,
    NgxGalleryAnimation
} from "ngx-gallery";
@Component({
    selector: "portfolio-detail",
    templateUrl: "./portfolio-detail.component.html",
    styleUrls: ["./portfolio-detail.component.scss"],
    providers: [PortfolioService, SeoService]
})
export class PortfolioDetailComponent extends BaseComponent implements OnInit {
    id = "";
    portfolio;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private activatedRoute: ActivatedRoute,
        private portfolioService: PortfolioService,
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
            this.portfolioService.getBySlug(this.id).subscribe(portfolio => {
                console.log("portfolio", portfolio);
                this.portfolio = portfolio[0];
                this.galleryImages = [];
                this.portfolio.images.forEach(image => {
                    this.galleryImages.push({
                        small: image,
                        medium: image,
                        big: image
                    });
                });

                this.seoService.generateTags({
                    title: this.portfolio.title + " - Portfolio",
                    description: this.portfolio.description,
                    slug: this.portfolio.slug,
                    keywords: this.portfolio.slug,
                    image:this.portfolio.images[0]
                });
            });
        });
        this.galleryOptions = [
            { image: false, thumbnailsRemainingCount: true, height: "100px" },
            { breakpoint: 500, width: "100%", thumbnailsColumns: 2 }
        ];
    }
}
