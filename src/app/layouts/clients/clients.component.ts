import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit {

    loading;
    constructor(private router: Router, @Inject(PLATFORM_ID) public platformId: string) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.loading = true;
                }
                else if (
                    event instanceof NavigationEnd ||
                    event instanceof NavigationCancel
                ) {
                    if (isPlatformBrowser(this.platformId)) {
                        this.loading = false;
                        window.scrollTo(0, 0);
                    }
                }
            });
    }
}
