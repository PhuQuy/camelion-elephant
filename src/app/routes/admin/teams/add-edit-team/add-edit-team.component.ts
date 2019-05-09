import { Component, Inject, ViewChild } from "@angular/core";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { UploadService } from "app/services/upload.service";
import { TeamService } from "app/services/team.service";

@Component({
    selector: "app-admin-add-edit-team",
    templateUrl: "./add-edit-team.component.html",
    styleUrls: ["./add-edit-team.component.scss"],
    providers: [TeamService, UploadService]
})

export class AddEditTeamComponent {
    public editor = ClassicEditor;
    public selectedCompany = '';
    platformsData = [];
    teamForm: FormGroup;
    id;
    @ViewChild("file") fileImage;
    imgURL = '/assets/images/person_1.jpg';
    edit: boolean = false;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, 
        private upSvc: UploadService, private teamService: TeamService) {
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
            if (this.id !== 'new') {
                this.teamService.getById(this.id).subscribe(team => {
                    this.teamForm.patchValue(team);
                    console.log(team);
                    
                    if (team.imgURL) {
                        this.imgURL = team.imgURL;
                    }
                    this.edit = true;
                })
            } else {
                this.edit = false;
            }
        })
    }

    ngOnInit() {
        this.createForm();
    }

    addTag(name) {
        return { name: name, tag: true };
    }

    createForm() {
        this.teamForm = new FormGroup({
            name: new FormControl("", [Validators.required]),
            position: new FormControl("", [Validators.required]),
            description: new FormControl("", [Validators.required]),
            imgURL : new FormControl("", [Validators.required])
        })
    }

    save() {
        if (this.edit) {
            this.teamService.update({ ...this.teamForm.value, id: this.id }).then(result => {
                this.router.navigate(['/admin/teams']);
            })
        } else {
            this.teamService.create(this.teamForm.value).then(result => {
                this.router.navigate(['/admin/teams']);
            })
        }
    }

    preview(event) {
        let file = event.target.files.item(0);
        if (!file) return;
        if (this.edit && this.teamForm.get('imgURL')) {
            this.upSvc.deleteFileByURL(this.teamForm.get('imgURL').value);
        }
        this.upSvc.pushUpload(`Teams/${file.name}`, file).subscribe(res => {
            this.imgURL = res;
            this.teamForm.patchValue({ imgURL: res });
        })
    }

}
