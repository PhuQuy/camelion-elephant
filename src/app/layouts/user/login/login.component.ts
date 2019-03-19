import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
export class LoginComponent extends BaseComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) public platformId: string) {
        super(platformId);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.initView();
    }

}
