import { Component, OnInit, PLATFORM_ID, Inject, Input } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent extends BaseComponent implements OnInit {

    @Input() blog;
    createDate;
    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.createDate = new Date(this.blog.createdAt.seconds*1000);
    }

}
