import { Component, Inject, Input  } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
	selector: "app-admin-category-modal",
	templateUrl: "./category-modal.component.html",
	styleUrls: ["./category-modal.component.scss"]
})
export class CategoryModalComponent {
	
	@Input() new;
	categoryForm: FormGroup;
	category;

	constructor(public activeModal: NgbActiveModal) {}

	ngOnInit() {
		this.createForm();
		if (this.category) {
			this.categoryForm.patchValue(this.category);
		}
	}

	createForm() {
		this.categoryForm = new FormGroup({
			name: new FormControl("", [Validators.required])
		})
	}

	save() {
		if (this.new) {
			this.activeModal.close(this.categoryForm.value);
		} else {
			this.category.name = this.categoryForm.value.name;
			this.activeModal.close(this.category);
		}
	}
}
