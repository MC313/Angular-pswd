import { Component, Input } from '@angular/core';

import { InputType } from '../shared/InputType';

@Component({
  selector: 'pg-pswd-result',
  templateUrl: './pswd-result.component.html'
})
export class PswdResultComponent {

  @Input() password: string;
  inputType: InputType;
  message: string;

  updateInputType(inputType: InputType) {
    this.inputType = inputType;
  }

  showMessage({type, msg}) {
    this.message = msg;
  }

  hideMessage() {
    this.message = null;
  }
}
