import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PswdResultComponent } from './pswd-result/pswd-result.component';
import { PswdButtonComponent } from './pswd-button/pswd-button.component';
import { CopyButtonComponent } from './copy-button/copy-button.component';
import { VisibleButtonComponent } from './visible-button/visible-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PswdResultComponent,
    PswdButtonComponent,
    CopyButtonComponent,
    VisibleButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
