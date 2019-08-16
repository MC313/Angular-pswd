import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { InputType } from '../shared/InputType';

@Component({
  selector: 'pg-visible-button',
  templateUrl: './visible-button.component.html'
})

export class VisibleButtonComponent implements OnInit {

  @Output() inputTypeChanged = new EventEmitter<InputType>();
  inputType: InputType;

  ngOnInit() {
    this.inputTypeChanged.emit('password');
  }

  toggleInputType() {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
    this.inputTypeChanged.emit(this.inputType);
  }

}
