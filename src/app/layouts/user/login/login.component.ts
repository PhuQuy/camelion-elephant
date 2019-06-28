import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { AngularFireAuth } from 'angularfire2/auth';
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
    remember = false;

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
            this.router.navigate(['/admin/dashboard']);
        }).catch((err) => {
            this.error = err.message;
        });
    }
    rememberClick(){
        this.remember = !this.remember;
    }
    
}
