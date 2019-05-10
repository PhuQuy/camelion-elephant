import { Component, Inject } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { PortfolioService } from "app/services/portfolio.service";
import { Subject } from "rxjs";

@Component({
	selector: "app-portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.scss"],
	providers: [PortfolioService]
})
export class PortfolioComponent {
	portfolios;
	dtTrigger = new Subject();
	constructor(private modalService: NgbModal, protected portfolioService: PortfolioService) {}
	

	ngOnInit() {
		this.getAll();
	}

	getAll() {
		this.portfolioService.getAll().subscribe(portfolios => {
			this.portfolios = portfolios;
			this.dtTrigger.next();

		})
	}

	delete(portfolio) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Portfolio delete";
		modalRef.result.then(result => {
			if(result === 'ok') {
				this.portfolioService.delete(portfolio.id).then();
			}
		})
	}
	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
}
