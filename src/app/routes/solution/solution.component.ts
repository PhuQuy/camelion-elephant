import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { SeoService } from '@shared/seo.service';

@Component({
    selector: 'solution',
    templateUrl: './solution.component.html',
    styleUrls: ['./solution.component.scss']
})
export class SolutionComponent extends BaseComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) public platformId: string, private seoService: SeoService) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: 'Solution',
            // description: 'Liên hệ Vay vốn sinh viên',
            slug: 'solution',
            // keywords: 'vay von sinh vien'
        });
    }

    ngAfterViewInit() {
        this.initView();
    }

}
