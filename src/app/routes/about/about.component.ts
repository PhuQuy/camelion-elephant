import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.initView();
    }

}
