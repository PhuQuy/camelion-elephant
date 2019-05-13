import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { ShareModule } from '@shared/share/share.module';
import { AgmCoreModule } from '@agm/core';
import { ContactService } from '@services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    ShareModule,AgmCoreModule
  ],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }
