import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogsComponent } from "./blogs.component";
import { AddEditBlogComponent } from "./add-edit-blog/add-edit-blog.component";
import { UploadImageModalComponent } from "./upload-image-modal/upload-image-modal.component";
import { BlogsRoutingModule } from "./blogs.routing";

import { ShareModule } from "@shared/share/share.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { DataTablesModule } from "angular-datatables";
import { ConfirmModalComponent } from "@components/admin/confirm-modal/confirm-modal.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { SimplemdeModule, SIMPLEMDE_CONFIG } from "ng2-simplemde";


@NgModule({
	imports: [
		CommonModule,
		ShareModule,
		BlogsRoutingModule,
		CKEditorModule,
		DataTablesModule,
		NgSelectModule,
		SimplemdeModule.forRoot({
			provide: SIMPLEMDE_CONFIG,
			useValue: {showIcons: ["code", "table"]}
		})
	],
	declarations: [BlogsComponent, AddEditBlogComponent, UploadImageModalComponent],
	entryComponents: [UploadImageModalComponent], 
	
})
export class BlogsModule {}
