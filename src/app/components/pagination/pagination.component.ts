import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    @Input() config: any;
    @Output() onPageChange = new EventEmitter();

    constructor() { }

    pageChange(page) {
        this.config.currentPage = page;
        this.onPageChange.emit(page);
    }

    prev(page) {
        if (!page.isFirstPage()) {
            page.previous();
        }
    }

    next(page) {
        if (!page.isLastPage()) {
            page.next();
        }
    }

}
