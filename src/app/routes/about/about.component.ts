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
            },
            990: {
                items: 3,
            }
        },
        navElement: 'div',
        lazyLoad: true,
        lazyLoadEager: 2,
        responsiveBaseElement: 'div'
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
            slug: "about",
        });
        this.loadTeams();
    }
    loadTeams() {
        this.teamService.getAll().subscribe(teams => {
            this.teams = teams;
        });
    }
    ngAfterViewInit() {
        this.initView();
    }
    getData(data: SlidesOutputData) {
        this.activeSlides = data;
    }
    getClickEvent(data) {
    }
}
