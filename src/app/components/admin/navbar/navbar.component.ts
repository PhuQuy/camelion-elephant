import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: "app-admin-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
	constructor(
		private router: Router,
		@Inject(DOCUMENT) private document: Document,
		 private firebaseAuth: AngularFireAuth
	) {}

	ngOnInit() {}

	onToggleMenu() {
		this.document.body.classList.toggle("is-collapsed");
	}

	logout() {
		this.firebaseAuth.auth.signOut().then(()=>{
            this.router.navigate(['/login']);
		});
	}
}
