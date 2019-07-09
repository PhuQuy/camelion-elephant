import { Component, Inject, ViewChild } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { PortfolioService } from "app/services/portfolio.service";
import { Subject } from "rxjs";
import { TeamService } from "app/services/team.service";
import { DataTableDirective } from "angular-datatables";

@Component({
	selector: "app-teams",
	templateUrl: "./teams.component.html",
	styleUrls: ["./teams.component.scss"],
	providers: [TeamService]
})
export class TeamsComponent {
	teams;
	constructor(
		private modalService: NgbModal,
		protected teamService: TeamService
	) {}
	dtTrigger = new Subject();
	@ViewChild(DataTableDirective) dtElement: DataTableDirective;
	index = 0;
	ngOnInit() {
		this.getAll();
	}

	getAll() {
		this.teamService.getAll().subscribe(teams => {
			this.teams = teams;
			
			if (this.index == 0) {
				this.dtTrigger.next();
				this.index++;
			} else {
				this.rerender();
			}
		});
	}

	delete(team) {
		const modalRef = this.modalService.open(ConfirmModalComponent);
		modalRef.componentInstance.title = "Team delete";
		modalRef.result.then(result => {
			if (result === "ok") {
				this.teamService.delete(team.id).then();
			}
		});
	}
	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}
	rerender = () => {
		this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
			dtInstance.destroy();
			this.dtTrigger.next();
		});
	};
}
