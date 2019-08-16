import { Component, OnInit } from '@angular/core';

import { PswdGenerator } from './shared/password-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  password: string;

  ngOnInit() {
    this.generatePassword();
  }

  generatePassword(): void {
    this.password = PswdGenerator.generate();
  }

}

