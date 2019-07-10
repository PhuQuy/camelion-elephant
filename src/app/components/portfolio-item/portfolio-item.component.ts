import { Component, OnInit, PLATFORM_ID, Inject, Input } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
    selector: 'app-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent extends BaseComponent implements OnInit {

    @Input() classSize ='';
    @Input('portfolio') portfolio;
    imageURL;
    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.imageURL = this.portfolio.images[0];
    }

}
