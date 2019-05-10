import { Component, OnInit, PLATFORM_ID, Inject, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { PaginationInstance } from 'ngx-pagination';
import { SeoService } from '@shared/seo.service';
import { PortfolioService } from '@services/portfolio.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    providers: [PortfolioService]
})
export class PortfolioComponent extends BaseComponent implements OnInit {
    config: PaginationInstance = {
        id: 'comment',
        itemsPerPage: 6,
        currentPage: 1
    };

    @ViewChild('portfolioHeader') portfolioHeader: ElementRef;

    portfolios: any;
    dtTrigger = new Subject();
    constructor(@Inject(PLATFORM_ID) public platformId: string, private seoService: SeoService, protected portfolioService: PortfolioService) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: 'Portfolio',
            description: 'Liên hệ Vay vốn sinh viên',
            slug: 'portfolio',
            keywords: 'vay von sinh vien'
        });
        this.getAll();
    }

    ngAfterViewInit() {
        this.initView();
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

    getAll() {
        this.portfolioService.getAll().subscribe(portfolios => {
            this.portfolios = portfolios;
            console.log("Log", portfolios);

            this.dtTrigger.next();

        })
    }
    pageChange(page) {
        this.portfolioHeader.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
