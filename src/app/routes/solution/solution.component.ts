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
            description: 'Gocodee specializes in multi-platform and cross-platform: Web development, Mobile application, Web application, Mobile application, Application Server Development',
            slug: 'solution',
            keywords: 'Web development, Mobile development, Application Server Development, Angular, ReactJs, Android, Java, NodeJs, Ionic, React Native'
        });
    }

    ngAfterViewInit() {
        this.initView();
    }

}
