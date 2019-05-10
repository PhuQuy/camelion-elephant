import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { SeoService } from '@shared/seo.service';
import { ContactService } from '@services/contact.service';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})
export class ContactComponent extends BaseComponent implements OnInit {

    logo = 'assets/images/logo3.png';
    contact = {
        fullname: null,
        email: null,
        number: null,
        message: null
    }
    constructor(@Inject(PLATFORM_ID) public platformId: string, private seoService: SeoService,
    private contactService: ContactService) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: ' Contact',
            description: 'Liên hệ Vay vốn sinh viên',
            slug: 'contact',
            keywords: 'vay von sinh vien'
        });
    }


    ngAfterViewInit() {
        this.initView();
    }

    save() {
        this.contactService.create(this.contact).then(() => {
            this.contact = {
                fullname: null,
                email: null,
                number: null,
                message: null
            }
        });
    }
}
