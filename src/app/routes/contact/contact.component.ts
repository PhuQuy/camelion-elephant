import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { BaseComponent } from "@core/base/base.component";
import { SeoService } from "@shared/seo.service";
import { ContactService } from "@services/contact.service";
import { NgForm } from '@angular/forms'

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [ContactService]
})
export class ContactComponent extends BaseComponent implements OnInit {

    logo = 'assets/images/logo3.png';
    fullname: null;
    email: null;
    number: null;
    message: null;
    phone;
    contact = {
        fullname: null,
        email: null,
        number: null,
        message: null
    }
    lat: number = 10.880319;
    lng: number = 106.794486;
    sendMessage = "";
    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private seoService: SeoService,
        private contactService: ContactService
    ) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: " Contact",
            // description: "Liên hệ Vay vốn sinh viên",
            slug: "contact",
            // keywords: "vay von sinh vien"
        });
    }

    ngAfterViewInit() {
        this.initView();
    }

    sendInfo(formSubmit: NgForm) {
        // console.log(formSubmit.value);
        // console.log(formSubmit.valid);

        if (formSubmit.valid) {
            this.contactService.create(formSubmit.value);

            this.sendMessage = "Your information has sent";
        }

    }
    closeAlert(formSubmit: NgForm) {
        formSubmit.reset();
        this.sendMessage = '';
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
