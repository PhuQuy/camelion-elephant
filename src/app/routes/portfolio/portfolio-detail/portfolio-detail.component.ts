import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
    selector: 'portfolio-detail',
    templateUrl: './portfolio-detail.component.html',
    styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent extends BaseComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngAfterViewInit() {
        this.initView();
    }

    ngOnInit() {
    }

}
