import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, PLATFORM_ID, AfterViewInit, HostListener } from "@angular/core";
import {
    NavigationCancel,
    NavigationEnd,
    NavigationStart,
    Router
} from "@angular/router";
import { SpinnerService } from "@components/spinner/spinner.service";

@Component({
    selector: "app-clients",
    templateUrl: "./clients.component.html",
    styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements AfterViewInit {
    loading = false;
    posY = 0;
    showScrollTop;
    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) public platformId: string,
        private spinnerService: SpinnerService
    ) { }

    @HostListener('window:scroll', ['$event'])
    public moveBackground() {
        this.posY = window.scrollY * 0.35;

        if (window.scrollY > window.innerHeight) {
            this.showScrollTop = true;
        } else {
            this.showScrollTop = false;
        }
    }

    ngOnInit() {
        this.loading = true;
    }

    ngAfterViewInit() {
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.loading = false;
        }, 3000);
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.spinnerService.show();
                this.loading = true;
                window.scrollTo(0, 0);
            } else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel
            ) {
                if (isPlatformBrowser(this.platformId)) {
                    setTimeout(() => {
                        this.spinnerService.hide();
                    }, 2000);
                    setTimeout(() => {
                        this.loading = false;
                        window.scrollTo(0, 0);
                    }, 3000);
                }
            }
        });
    }

    scrollTop() {
        window.scrollTo(0, 0);
    }
}
