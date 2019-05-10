import { Component, OnInit, PLATFORM_ID, Inject, Input } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
    selector: 'app-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent extends BaseComponent implements OnInit {

    @Input() classSize ='';
    @Input('portfolios') portfolio;
    title;
    imageURL;
    link;
    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        //console.log('classSize', this.classSize);
        this.title = this.portfolio.title;
        this.imageURL = this.portfolio.images[0];
        this.link = this.portfolio.link;
        console.log("Item", this.portfolio);
        
    }

}
