import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ShareModule } from '@shared/share/share.module';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
