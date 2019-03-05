import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { PaginationInstance } from 'ngx-pagination';

@Component({
    selector: 'blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent extends BaseComponent implements OnInit {
    searchBlog: string = '';
    config: PaginationInstance = {
        id: 'comment',
        itemsPerPage: 3,
        currentPage: 1
    };
    blogs = [
        {
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '20-02-2019 05:02:04',
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
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '20-02-2019 05:02:04',
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
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '20-02-2019 05:02:04',
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
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '20-02-2019 05:02:04',
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
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '20-02-2019 05:02:04',
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
            title: 'Even the all-powerful Pointing has no control about the blind texts',
            createdDate: '20-02-2019 05:02:04',
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
    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngOnInit() {
    }

    clearSearch() {
        this.searchBlog = '';
    }

    ngAfterViewInit() {
        this.initView();
    }

}