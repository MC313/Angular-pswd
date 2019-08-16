import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pg-pswd-button',
  templateUrl: './pswd-button.component.html'
})
export class PswdButtonComponent {

  constructor() { }

  @Output() clicked = new EventEmitter();

}
