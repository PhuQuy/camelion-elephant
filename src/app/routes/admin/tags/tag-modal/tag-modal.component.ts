import { Component, Inject, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TagService } from "app/services/tag.service";

@Component({
	selector: "app-admin-tag-modal",
	templateUrl: "./tag-modal.component.html",
	styleUrls: ["./tag-modal.component.scss"]
})

export class TagModalComponent {
	tagForm: FormGroup;
	@Input() new;
	tag;
	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {
		this.createForm();
		if (this.tag) {
			this.tagForm.patchValue(this.tag);
		}
	}

	createForm() {
		this.tagForm = new FormGroup({
			name: new FormControl("", [Validators.required])
		})
	}

	save() {
		if (this.new) {
			this.activeModal.close(this.tagForm.value);
		} else {
			this.tag.name = this.tagForm.value.name;
			this.activeModal.close(this.tag);
		}
	}
}
