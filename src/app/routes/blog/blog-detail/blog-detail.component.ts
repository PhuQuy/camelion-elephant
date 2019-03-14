import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
    selector: 'blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent extends BaseComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngAfterViewInit() {
        this.initView();
    }

    ngOnInit() {
    }

}
