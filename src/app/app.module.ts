import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';

import { ToastMessagesComponent } from './toast-messages/toast-messages.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PasswordModule } from './password/password.module';

/*Routing Module */
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    PasswordModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
    ToastMessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
