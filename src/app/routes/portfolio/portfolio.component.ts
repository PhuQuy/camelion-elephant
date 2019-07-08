import {
    Component,
    OnInit,
    PLATFORM_ID,
    Inject,
    ElementRef,
    ViewChild
} from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { PaginationInstance } from "ngx-pagination";
import { SeoService } from "@shared/seo.service";
import { PortfolioService } from "@services/portfolio.service";
import { SpinnerService } from "@components/spinner/spinner.service";
import { environment } from "@env/environment.prod";

@Component({
    selector: "portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ["./portfolio.component.scss"],
    providers: [PortfolioService]
})
export class PortfolioComponent extends BaseComponent implements OnInit {
    config: PaginationInstance = {
        id: "comment",
        itemsPerPage: 6,
        currentPage: 1
    };

    @ViewChild("portfolioHeader") portfolioHeader: ElementRef;

    portfolios: any;
    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private seoService: SeoService,
        protected portfolioService: PortfolioService,
        private spinnerService:SpinnerService
    ) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: "Portfolio",
            slug: "portfolio",
            description:'Gocodee is delivering high-quality services to our clients, helping them grow their business. Check out our projects. Read our case studies selection.',
            url: `${environment.domain}/portfolio/`
        });
        this.getAll();
    }

    ngAfterViewInit() {
        this.initView();
    }

    getAll() {
        // this.spinnerService.show();
        this.portfolioService.getAll().subscribe(portfolios => {
            this.portfolios = portfolios;
            // this.spinnerService.hide();
            console.log("portfolios", portfolios);
        });
    }
    pageChange(page) {
        this.portfolioHeader.nativeElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
