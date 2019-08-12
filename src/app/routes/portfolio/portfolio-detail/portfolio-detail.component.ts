import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '@services/portfolio.service';
import { SeoService } from '@shared/seo.service';
import {
    NgxGalleryOptions,
    NgxGalleryImage,
    NgxGalleryAnimation
} from 'ngx-gallery';
import { environment } from '@env/environment.prod';
@Component({
    selector: 'app-portfolio-detail',
    templateUrl: './portfolio-detail.component.html',
    styleUrls: ['./portfolio-detail.component.scss'],
    providers: [PortfolioService, SeoService]
})
export class PortfolioDetailComponent extends BaseComponent implements OnInit {
    id = '';
    portfolio = { title: '', images: [''], description: '', slug: '', link: '', platforms: [] };
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private activatedRoute: ActivatedRoute,
        private portfolioService: PortfolioService,
        private seoService: SeoService,
        private router: Router
    ) {
        super(platformId);
    }

    ngAfterViewInit() {
        this.initView();
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            this.portfolioService.getBySlug(this.id).subscribe(portfolio => {
                console.log('portfolio', portfolio);
                if (portfolio.length === 0) {
                    this.router.navigate(['/not-found']);
                    return;
                }
                this.portfolio = portfolio[0];
                this.galleryImages = [];
                this.portfolio.images.forEach(image => {
                    this.galleryImages.push({
                        small: image,
                        medium: image,
                        big: image
                    });
                });
                let keywords = '';
                this.portfolio.platforms.forEach(platform => {
                    keywords = keywords + platform.name + ' outsource in Vietnam, ';
                });
                this.seoService.generateTags({
                    title: this.portfolio.title + ' - Portfolio',
                    description: this.portfolio.description + ' ' + keywords,
                    slug: this.portfolio.slug,
                    keywords: keywords,
                    image: this.portfolio.images[0],
                    url: `${environment.domain}/portfolio/${this.portfolio.slug}`
                });
            });
        });
        this.galleryOptions = [
            { previewCloseOnClick: true, previewCloseOnEsc: true },
            { image: false, thumbnailsRemainingCount: true, height: '100px' },
            { breakpoint: 500, width: '100%', thumbnailsColumns: 2 }
        ];
    }
}
