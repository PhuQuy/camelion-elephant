import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FootModule } from '@components/foot/foot.module';
import { NavbarModule } from '@components/navbar/navbar.module';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients.routing';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NavbarModule,
    FootModule,
    SpinnerModule
  ],
  declarations: [ClientsComponent],
  exports: [ClientsRoutingModule]
})
export class ClientsModule { }
