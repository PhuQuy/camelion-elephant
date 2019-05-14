import {
    Component,
    OnInit,
    PLATFORM_ID,
    Inject,
    ViewChild,
    ElementRef
} from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { SeoService } from "@shared/seo.service";
import { SlidesOutputData } from "ngx-owl-carousel-o";
import { TeamService } from "@services/team.service";
@Component({
    selector: "about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
    providers: [TeamService]
})
export class AboutComponent extends BaseComponent implements OnInit {
    customOptions: any = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        center: true,
        margin: 30,
        navSpeed: 700,
        stagePadding: 50,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        navClass: ['owl-prev', 'owl-next'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
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
        responsiveBaseElement: 'div'
    };
    slideStore = [
        {
            src: "/assets/images/person_1.jpg",
            alt: "image 1",
            title: "Person 1",
            name: "Dennis Green",
            job: "Web Developer"
        },
        {
            src: "/assets/images/person_2.jpg",
            alt: "image 2",
            title: "Person 2",
            name: "Erik Lee",
            job: "UI Designer"
        },
        {
            src: "/assets/images/person_3.jpg",
            alt: "image 3",
            title: "Person 3",
            name: "Dennis Green",
            job: "System Analytics"
        },
        {
            src: "/assets/images/person_1.jpg",
            alt: "image 1",
            title: "Person 1",
            name: "Erik Lee",
            job: "Maketing Manager"
        },
        {
            src: "/assets/images/person_2.jpg",
            alt: "image 2",
            title: "Person 2",
            name: "Dennis Green",
            job: "Web Developer"
        },
        {
            src: "/assets/images/person_3.jpg",
            alt: "image 3",
            title: "Person 3",
            name: "Dennis Green",
            job: "Web Developer"
        },
        {
            src: "/assets/images/person_3.jpg",
            alt: "image 3",
            title: "Person 3",
            name: "Dennis Green",
            job: "System Analytics"
        },

    ];
    configCount = {
        animation: 'count',
        format: '(,ddd)',
        duration: 8000,
        theme: 'default',
        value: 0,
        auto: true,
    };
    activeSlides: SlidesOutputData;
    slidesStore: any[];
    teams = [];
    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private seoService: SeoService,
        private teamService: TeamService
    ) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: "About",
            description: "Liên hệ Vay vốn sinh viên",
            slug: "about",
            keywords: "vay von sinh vien"
        });
        this.loadTeams();
    }
    loadTeams() {
        this.teamService.getAll().subscribe(teams => {
            //console.log('team', teams);
            this.teams = teams;
        });
    }
    ngAfterViewInit() {
        this.initView();
    }
    getData(data: SlidesOutputData) {
        this.activeSlides = data;
        //console.log(this.activeSlides);
    }
    getClickEvent(data) {
        console.log(data.name);
    }
}
