import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ShareModule } from '@shared/share/share.module';
import { SpinnerModule } from '@components/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
