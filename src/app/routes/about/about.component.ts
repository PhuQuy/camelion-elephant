import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { SeoService } from '@shared/seo.service';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) public platformId: string, private seoService: SeoService) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: 'About',
            description: 'Liên hệ Vay vốn sinh viên',
            slug: 'about',
            keywords: 'vay von sinh vien'
        });
    }

    ngAfterViewInit() {
        this.initView();
    }

}
