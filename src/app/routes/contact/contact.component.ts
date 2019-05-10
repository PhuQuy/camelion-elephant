import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { SeoService } from "@shared/seo.service";

@Component({
    selector: "contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"]
})
export class ContactComponent extends BaseComponent implements OnInit {
    logo = "assets/images/logo3.png";
    lat: number = 10.880319;
    lng: number = 106.794486;
    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private seoService: SeoService
    ) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: " Contact",
            description: "Liên hệ Vay vốn sinh viên",
            slug: "contact",
            keywords: "vay von sinh vien"
        });
    }

    ngAfterViewInit() {
        this.initView();
    }
}
