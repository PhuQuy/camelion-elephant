import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    
  }

  ngOnInit() {
  }

  onToggleMenu(){
		this.document.body.classList.toggle('is-collapsed');
	}
}
