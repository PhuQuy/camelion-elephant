import { Component, OnInit, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { SeoService } from '@shared/seo.service';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

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
        center:true,
        margin:20,
        navSpeed: 700,
        stagePadding: 90,
        nav:true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        navClass: ['owl-prev', 'owl-next'],
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
        
        lazyLoad: true,
        lazyLoadEager: 2,
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
    activeSlides: SlidesOutputData;
    slidesStore: any[];
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

    getData(data: SlidesOutputData) {
        this.activeSlides = data;
        console.log(this.activeSlides);
      }
}
