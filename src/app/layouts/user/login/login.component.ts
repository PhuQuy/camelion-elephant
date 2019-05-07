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

    // detectFiles(event) {
    //     let file = event.target.files.item(0);
    //     const that = this;
    //     if (file) {
    //         if (this.edit) {
    //             let name = that.propertyForm.get('name').value;
    //             that.uploadService.pushUpload(`Agency/${this.user.Agency}/${this.storedId ? this.storedId : name}/imagesCover/${file.name}`, file).subscribe(res => {
    //                 that.propertyForm.patchValue({
    //                     imagesCover: [res]
    //                 });
    //                 this.submit();

    //             });
    //         } else {
    //             var reader = new FileReader();
    //             reader.onload = function (e) {
    //                 that.propertyForm.patchValue({
    //                     imagesCover: [e.target['result']]
    //                 });

    //                 that.propertyForm.patchValue({
    //                     newImagesCover: file
    //                 });
    //             }
    //             reader.readAsDataURL(file);
    //         }
    //     }
    // }
}
