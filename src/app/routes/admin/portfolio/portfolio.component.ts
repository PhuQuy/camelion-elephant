import { Component, Inject, ViewChild } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { PortfolioService } from "app/services/portfolio.service";
import { Subject, Subscription } from "rxjs";
import { DataTableDirective } from "angular-datatables";

@Component({
	selector: "app-portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.scss"],
	providers: [PortfolioService]
})
export class PortfolioComponent {
	portfolios;
	dtTrigger = new Subject();
	sub: Subscription;
	index = 0;
	@ViewChild(DataTableDirective) dtElement: DataTableDirective;

	constructor(
		private modalService: NgbModal,
		protected portfolioService: PortfolioService
	) {}

	ngOnInit() {
		this.getAll();
	}

	getAll() {
		this.sub = this.portfolioService.getAll().subscribe(portfolios => {
			this.portfolios = portfolios;
			if (this.index == 0) {
				this.index ++;
				this.dtTrigger.next();
			} else {
				this.rerender();
			}
		});
	}

	delete(portfolio) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Portfolio delete";
		modalRef.result.then(result => {
			if (result === "ok") {
				this.portfolioService.delete(portfolio.id).then();
			}
		});
	}
	rerender = () => {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.destroy();
			this.dtTrigger.next();
		});
	};
	ngOnDestroy(): void {
		console.log("destroy");
		this.dtTrigger.unsubscribe();
		this.sub.unsubscribe();
	}
}
