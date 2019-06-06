import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'explore-more',
    templateUrl: './explore-more.component.html',
    styleUrls: ['./explore-more.component.scss']
})
export class ExploreMoreComponent {
    service: any;
    constructor(public activeModal: NgbActiveModal) { }

}
