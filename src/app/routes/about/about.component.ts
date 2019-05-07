import { Component, OnInit, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { SeoService } from '@shared/seo.service';
import { ViewCache } from '@firebase/database/dist/src/core/view/ViewCache';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponent implements OnInit {
    customOptions: any = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: true,
        margin:20,
        navSpeed: 700,
        stagePadding: 50,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3,
               // loop: false
            },
            990: {
                items: 3,
               // loop: false
            }
        },
        navElement: 'div',
        navClass: ['owl-prev', 'owl-next'],
        lazyLoad: true,
        lazyLoadEager: 2,
        responsiveBaseElement: 'div'
    };
    slideStore = [
        {
            src: "/assets/images/person_1.jpg",
            alt: "image 1",
            title: 'Person 1',
            name: "Dennis Green",
            job: "Web Developer"
        },
        {
            src: "/assets/images/person_2.jpg",
            alt: "image 2",
            title: 'Person 2',
            name: "Dennis Green",
            job: "UI Designer"
        },
        {
            src: "/assets/images/person_3.jpg",
            alt: "image 3",
            title: 'Person 3',
            name: "Dennis Green",
            job: "System Analytics"
        },
        {
            src: "/assets/images/person_1.jpg",
            alt: "image 1",
            title: 'Person 1',
            name: "Dennis Green",
            job: "Maketing Manager"
        },
        {
            src: "/assets/images/person_2.jpg",
            alt: "image 2",
            title: 'Person 2',
            name: "Dennis Green",
            job: "Web Developer"
        },
        {
            src: "/assets/images/person_3.jpg",
            alt: "image 3",
            title: 'Person 3',
            name: "Dennis Green",
            job: "Web Developer"
        },

    ]

    constructor(@Inject(PLATFORM_ID) public platformId: string, private seoService: SeoService) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: 'About',
            description: 'Liên hệ Vay vốn sinh viên',
            slug: 'about',
            keywords: 'vay von sinh vien'
        });

    }

    ngAfterViewInit() {
        this.initView();
    }

}
