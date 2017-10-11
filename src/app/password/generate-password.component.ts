import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { PasswordService } from '../password/password.service';
import { PasswordResultService } from '../password/password-result.service';

@Component({
  selector: 'generate-password-button',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss'],
  animations: [
    trigger('buttonActive', [
      state('unclicked', style({
        transform: 'rotate(90deg)'
      })),
      state('clicked', style({
        transform: 'rotate(-120deg)'
      })),
      transition('unclicked <=> clicked', animate('100ms linear'))
    ])
  ]
})

export class GeneratePasswordComponent implements OnInit {

  result: string;
  state: string = 'unclicked';

  constructor(
    private ps: PasswordService,
    private passwordResultService: PasswordResultService
  ) { }

  ngOnInit() { }

  generatePassword() {
    let generatedValue = this.ps.generatePassword();
    this.passwordResultService.setPasswordValue(generatedValue);
    this.state = (this.state === 'clicked' ? 'unclicked' : 'clicked');
  };

}
