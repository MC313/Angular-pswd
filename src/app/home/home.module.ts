import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PasswordModule } from '../password/password.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PasswordModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]

})
export class HomeModule { }
