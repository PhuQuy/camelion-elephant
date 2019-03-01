import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import * as AOS from 'aos';
declare let $: any;

@Component({
    selector: 'base',
    template: ''
})
export class BaseComponent implements AfterViewInit {
    constructor(@Inject(PLATFORM_ID) public platformId: string) {
    }

    checkPlatformBrowser() {
        return isPlatformBrowser(this.platformId);
    }

    ngAfterViewInit(){
        
    }

    initView() {
        if (isPlatformBrowser(this.platformId)) {
            AOS.init();
            $('.hero-area-fix').ripples({
                resolution: 712,
                dropRadius: 20,
                perturbance: 0.04,
            });
        }
    }
}
