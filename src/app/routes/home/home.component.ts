import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    @ViewChild('rippleAnimation') rippleAnimation: ElementRef;

    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            $('.hero-area-fix').ripples({
                resolution: 712,
                dropRadius: 20,
                perturbance: 0.04,
            });
            
        }
    }
}
