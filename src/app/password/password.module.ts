import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GeneratePasswordComponent } from '../password/generate-password.component';
import { PasswordResultComponent } from '../password/password-result.component';

import { PasswordService } from '../password/password.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    GeneratePasswordComponent,
    PasswordResultComponent
  ],
  exports: [
    GeneratePasswordComponent,
    PasswordResultComponent
  ],
  providers: [
    PasswordService
  ]
})
export class PasswordModule { }
