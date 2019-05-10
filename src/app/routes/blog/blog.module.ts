import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogComponent } from "./blog.component";
import { ShareModule } from "@shared/share/share.module";
import { BlogRoutingModule } from "./blog.routing";
import { PaginationModule } from "@components/pagination/pagination.module";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { RecentBlogComponent } from "./recent-blog/recent-blog.component";
import { RightBlogComponent } from "./right-blog/right-blog.component";
import { NgxMdModule } from "ngx-md";
@NgModule({
	imports: [
		CommonModule,
		BlogRoutingModule,
		ShareModule,
		PaginationModule,
		Ng2SearchPipeModule,
		NgxMdModule.forRoot()
	],
	declarations: [
		BlogComponent,
		BlogDetailComponent,
		RecentBlogComponent,
		RightBlogComponent
	]
})
export class BlogModule {}
