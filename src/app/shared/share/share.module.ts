import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@shared/date.pipe';
import { PortfolioItemComponent } from '@components/portfolio-item/portfolio-item.component';
import { BlogItemComponent } from '@components/blog-item/blog-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    declarations: [DatePipe, PortfolioItemComponent, BlogItemComponent],
    exports: [RouterModule, FormsModule, ReactiveFormsModule, NgbModule, DatePipe, PortfolioItemComponent, BlogItemComponent]
})
export class ShareModule { }
