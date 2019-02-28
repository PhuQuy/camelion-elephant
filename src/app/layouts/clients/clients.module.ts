import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients.routing';
import { NavbarModule } from '@components/navbar/navbar.module';
import { ShareModule } from '@shared/share/share.module';
import { FootModule } from '@components/foot/foot.module';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NavbarModule,
    ShareModule,
    FootModule
  ],
  declarations: [ClientsComponent],
  exports: [ClientsRoutingModule]
})
export class ClientsModule { }
