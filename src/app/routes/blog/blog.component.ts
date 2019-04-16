import { Component, OnInit, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { PaginationInstance } from 'ngx-pagination';
import { SeoService } from '@shared/seo.service';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent extends BaseComponent implements OnInit {
    searchBlog: string = '';
    config: PaginationInstance = {
        id: 'comment',
        itemsPerPage: 6,
        currentPage: 1
    };
    @ViewChild('blogHeader') blogHeader: ElementRef;
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
        },

        {
            id: 4,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_4.jpg',
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
            id: 5,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_5.jpg',
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
            id: 6,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_6.jpg',
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
            id: 7,
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
            id: 8,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
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
            id: 9,
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
        },

        {
            id: 10,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_4.jpg',
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
            id: 11,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_5.jpg',
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
            id: 12,
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '2019-02-20 05:02:04',
            postedBy: 'Admin',
            photoURL: '/assets/images/image_6.jpg',
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
        }
    ]
    constructor(@Inject(PLATFORM_ID) public platformId: string, private seoService: SeoService) {
        super(platformId);
    }

    ngOnInit() {
        this.seoService.generateTags({
            title: ' Blog',
            description: 'Liên hệ Vay vốn sinh viên',
            slug: 'blog',
            keywords: 'vay von sinh vien'
        });
    }

    clearSearch() {
        this.searchBlog = '';
    }

    ngAfterViewInit() {
        this.initView();
    }

    pageChange(page) {
        this.blogHeader.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

}