import { Component, AfterViewInit, PLATFORM_ID, Inject, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { BaseComponent } from '@core/base/base.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SeoService } from '@shared/seo.service';

declare let $: any;
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {
    closeResult: string;
    blogs = [
        {
            id: 1,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_1.jpg',
            comments: [
                {
                    postedBy: 'User',
                    message: 'That \'s beautiful!'
                },
                {
                    postedBy: 'Quy',
                    message: 'Hello there!'
                }
            ]
        },

        {
            id: 2,
            title: 'Right time, right girl',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_2.jpg',
            comments: [
                {
                    postedBy: 'User',
                    message: 'That \'s beautiful!'
                },
                {
                    postedBy: 'Quy',
                    message: 'Hello there!'
                }
            ]
        },

        {
            id: 3,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_3.jpg',
            comments: [
                {
                    postedBy: 'User',
                    message: 'That \'s beautiful!'
                },
                {
                    postedBy: 'Quy',
                    message: 'Hello there!'
                }
            ]
        }];
    constructor(@Inject(PLATFORM_ID) public platformId: string,
        private modalService: NgbModal, private seoService: SeoService) {
        super(platformId);
    }

    ngAfterViewInit() {
        this.initView();
        if (this.checkPlatformBrowser()) {
            this.loadTypeWriter();
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        }
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: 'Home',
            description: 'Liên hệ Vay vốn sinh viên',
            slug: 'home',
            keywords: 'vay von sinh vien'
        });
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: true, windowClass: 'modal', centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    loadTypeWriter() {
        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };
    }

}
