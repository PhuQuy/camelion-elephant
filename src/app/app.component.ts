import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let $:any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // @ViewChild('rippleAnimation') rippleAnimation: ElementRef;

    // constructor(@Inject(PLATFORM_ID) public platformId: string) {
        
    // }

    // ngAfterViewInit() {
    //     if (isPlatformBrowser(this.platformId)) {
    //         $('.hero-area-fix').ripples({
    //             resolution: 712,
    //             dropRadius: 20,
    //             perturbance: 0.04,
    //         });
            
    //     }
    // }
}
