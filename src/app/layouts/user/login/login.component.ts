import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AngularFireAuth]
})
export class LoginComponent extends BaseComponent implements OnInit {
    email;
    password;
    error;

    constructor(@Inject(PLATFORM_ID) public platformId: string, private af: AngularFireAuth, public router: Router) {
        super(platformId);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.initView();
    }

    login() {
        this.af.auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
            this.error = null;
            this.router.navigate(['/']);
        }).catch((err) => {
            this.error = err.message;
        });
    }
}
