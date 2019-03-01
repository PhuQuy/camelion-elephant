import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { ShareModule } from '@shared/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ShareModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
