import { Component, OnInit } from '@angular/core';

import { PswdGenerator } from './shared/password-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  password: string;
  message: string;

  ngOnInit() {
    this.generatePassword();
  }

  generatePassword(): void {
    this.password = PswdGenerator.generate();
    this.hideMessage();
  }

  showMessage({ type, msg }) {
    this.message = msg;
  }

  hideMessage() {
    this.message = null;
  }

}

