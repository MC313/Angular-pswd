import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PasswordComponent } from '../password/password.component';

import { PasswordService } from '../password/password.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PasswordComponent
  ],
  exports: [
    PasswordComponent
  ],
  providers: [
    PasswordService
  ]
})
export class PasswordModule { }
