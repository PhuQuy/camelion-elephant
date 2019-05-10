import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { ShareModule } from '@shared/share/share.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ShareModule,AgmCoreModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
