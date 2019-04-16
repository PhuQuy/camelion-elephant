import { Component, OnInit, PLATFORM_ID, Inject, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { PaginationInstance } from 'ngx-pagination';
import { SeoService } from '@shared/seo.service';

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent extends BaseComponent implements OnInit {
    config: PaginationInstance = {
        id: 'comment',
        itemsPerPage: 6,
        currentPage: 1
    };

    @ViewChild('portfolioHeader') portfolioHeader: ElementRef;

    portfolios = [
        {
            id: 1,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-1.jpg'
        },
        {
            id: 2,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-2.jpg'
        },
        {
            id: 3,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-3.jpg'
        },
        {
            id: 4,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-4.jpg'
        },
        {
            id: 5,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-5.jpg'
        },
        {
            id: 6,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-6.jpg'
        },
        {
            id: 8,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-2.jpg'
        },
        {
            id: 7,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-1.jpg'
        },
        {
            id: 9,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-3.jpg'
        },
        {
            id: 11,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-5.jpg'
        },
        {
            id: 10,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-4.jpg'
        },
        {
            id: 12,
            title: 'Even the all-powerful Pointing has no control', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
            subTitle: 'Illustration',
            photoURL: '/assets/images/work-6.jpg'
        }
    ]

    constructor(@Inject(PLATFORM_ID) public platformId: string, private seoService: SeoService) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: 'Portfolio',
            description: 'Liên hệ Vay vốn sinh viên',
            slug: 'portfolio',
            keywords: 'vay von sinh vien'
        });
    }

    ngAfterViewInit() {
        this.initView();
    }

    pageChange(page) {
        this.portfolioHeader.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
