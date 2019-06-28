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

    styles = [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "hue": "#bc00ff"
                },
                {
                    "saturation": "0"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#e8b8f9"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#ff0000"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#3e114e"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#a02aca"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#0e1626"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#9e1010"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ff0000"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#58176e"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#a02aca"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d180ee"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#a02aca"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#ff0000"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#a02aca"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#cc81e7"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "hue": "#bc00ff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#6d2388"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#c46ce3"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#b7918f"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#280b33"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#a02aca"
                }
            ]
        }
    ]
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
            slug: "contact",
        });
    }

    ngAfterViewInit() {
        this.initView();
    }

    sendInfo(formSubmit: NgForm) {
        if (formSubmit.valid) {
            this.contactService.create(formSubmit.value);
            this.sendMessage = "Your information has sent";
            const email = formSubmit.value.email;
            const fullname = formSubmit.value.fullname;
            this.contactService.sendEmail(email, fullname).subscribe(res=>{
                console.log('res', res);
            },err=>{
                console.log('err', err);
            });
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
