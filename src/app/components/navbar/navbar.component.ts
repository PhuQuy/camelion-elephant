import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@components/spinner/spinner.service';

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
            this.scrolled = window.scrollY > 100;
            this.awake = window.scrollY > 100;
            if (window.scrollY > 100) {
                this.logo = "/assets/images/logo4.png";
            } else {
                this.logo = '/assets/images/logo3.png';
            }
        }
    }

    collapsed = true;
    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    constructor(@Inject(PLATFORM_ID) public platformId: string, private router: Router, private spinnerService: SpinnerService) { }
    show = false;
    hide;
    scaleUp;
    ngOnInit() {
        this.router.events
            .subscribe(() => {
                this.collapsed = true;
            });

        this.scaleUp = true;
        this.show = true;

        setTimeout(() => {
            this.scaleUp = false;
        }, 3000);

        //    this.spinnerService.loaderState.subscribe(
        //             (state: SpinnerState) => {
        //                 if (!state.show) {
        //                     this.hide = true;
        //                     setTimeout(() => {
        //                         this.show = state.show;
        //                     }, 500);
        //                 } else {
        //                     setTimeout(() => {
        //                         this.scaleUp = true;
        //                     }, 100);
        //                     this.show = state.show;
        //                 }
        //             }
        //         );
    }

}
