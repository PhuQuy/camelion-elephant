import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    scrolled: boolean = false;
    awake: boolean = false;
    logo: string = '/assets/images/logo3.png';

    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (isPlatformBrowser(this.platformId)) {
            this.scrolled = window.scrollY > 60;
            this.awake = window.scrollY > 100;
            if (window.scrollY > 100) {
                this.logo = "/assets/images/logo4.png";
            } else {
                this.logo = '/assets/images/logo3.png';
            }
        }
    }

    constructor(@Inject(PLATFORM_ID) public platformId: string) { }

    ngOnInit() {
    }

}
