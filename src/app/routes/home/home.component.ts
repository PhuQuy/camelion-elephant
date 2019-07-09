import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SpinnerService } from '@components/spinner/spinner.service';
import { BaseComponent } from '@core/base/base.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from '@services/blog.service';
import { PortfolioService } from '@services/portfolio.service';
import { SeoService } from '@shared/seo.service';
import { Subject } from 'rxjs';

declare let $: any;
let TxtType = function (el, toRotate, period) {
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
    styleUrls: ['./home.component.scss'],
    providers: [PortfolioService, BlogService]
})
export class HomeComponent extends BaseComponent {
    customOptions: any = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        center: true,
        margin: 500,
        navSpeed: 700,
        stagePadding: 20,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        navText: [
            `<img class="rotate" src="/assets/images/circlearrow.png" />`,
            `<img src="/assets/images/circlearrow.png" />`
        ],
        navClass: ['owl-prev', 'owl-next'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
                // loop: false
            },
            990: {
                items: 1
                // loop: false
            }
        },
        navElement: 'div',
        lazyLoad: true,
        lazyLoadEager: 2,
        responsiveBaseElement: 'div'
    };

    owlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        nav: false,
        autoWidth: true,
        singleItem: true,
        navSpeed: 700,
        responsive: {
            0: {
                items: 1
            },
            330: {
                items: 1.1
            },
            1050: {
                items: 3
            },
            1090: {
                items: 4
            },
            1600: {
                items: 5
            },
            1825: {
                items: 6
            }
        }
    };

    configCount = {
        animation: 'count',
        format: '(,ddd)',
        duration: 8000,
        theme: 'default',
        value: 0,
        auto: true
    };
    closeResult: string;
    blogs = [];
    portfolios: any;
    homePortfolios: any;
    dtTrigger = new Subject();
    invisibleIndex = 2;

    constructor(
        @Inject(PLATFORM_ID) public platformId: string,
        private seoService: SeoService,
        protected portfolioService: PortfolioService,
        private blogService: BlogService,
        private spinnerService: SpinnerService,
        private modalService: NgbModal
    ) {
        super(platformId);
    }

    ngAfterViewInit() {
        this.initView();
        if (this.checkPlatformBrowser()) {
            this.loadTypeWriter();
            let elements = document.getElementsByClassName('typewrite');
            for (let i = 0; i < elements.length; i++) {
                let toRotate = elements[i].getAttribute('data-type');
                let period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            let css = document.createElement('style');
            css.type = 'text/css';
            css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
            document.body.appendChild(css);
        }
    }

    ngOnInit() {
        this.seoService.generateTags({
            slug: 'home'
        });
        this.getAll();
        this.loadRecentBlogs();
    }
    
    loadRecentBlogs() {
        this.blogService.getLimit(6).subscribe(blogs => {
            this.blogs = blogs;
        });
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', keyboard: true}).result.then((result) => {
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
            let i = this.loopNum % this.toRotate.length;
            let fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            let that = this;
            let delta = 200 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

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
    getAll() {
        // this.spinnerService.show();
        this.portfolioService.getInHome().subscribe(portfolios => {
            //   this.spinnerService.hide();

            if (portfolios.length > 0) {
                this.portfolios = portfolios;
                if (portfolios.length > 3) {
                    this.homePortfolios = portfolios.slice(0, 3);
                } else {
                    this.homePortfolios = portfolios;
                }
            } else {
                this.portfolios = [];
            }
        });
    }

    getData(data) {
        if (data.startPosition + 2 >= this.portfolios.length) {
            this.invisibleIndex = data.startPosition + 2 - this.portfolios.length;
        } else {
            this.invisibleIndex = data.startPosition + 2;
        }
    }
}
