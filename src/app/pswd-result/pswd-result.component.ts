import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { InputType } from '../shared/InputType';

@Component({
  selector: 'pg-pswd-result',
  templateUrl: './pswd-result.component.html'
})
export class PswdResultComponent {

  @Input() password: string;
  @Output() copied = new EventEmitter<{ type: string, msg: string }>();
  inputType: InputType;

  updateInputType(inputType: InputType) {
    this.inputType = inputType;
  }

}
