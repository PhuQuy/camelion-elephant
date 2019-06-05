import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
    selector: 'app-list-service',
    templateUrl: './list-service.component.html',
    styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent extends BaseComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
    }

}
