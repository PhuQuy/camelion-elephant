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

    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (isPlatformBrowser(this.platformId)) {
            this.scrolled = window.scrollY > 60;
            this.awake = window.scrollY > 100;
        }
    }

    constructor(@Inject(PLATFORM_ID) public platformId: string) { }

    ngOnInit() {
    }

}
