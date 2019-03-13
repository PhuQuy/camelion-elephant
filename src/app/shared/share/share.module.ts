import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@shared/date.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [DatePipe],
    exports: [RouterModule, FormsModule, NgbModule, DatePipe]
})
export class ShareModule { }
