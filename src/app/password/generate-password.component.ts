import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password/password.service';
import { PasswordResultService } from '../password/password-result.service';

@Component({
  selector: 'generate-password-button',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.scss']
})

export class GeneratePasswordComponent implements OnInit
{

  result: string;

  constructor(
    private ps: PasswordService,
    private passwordResultService: PasswordResultService)
  { }

  ngOnInit()
  { }

  generatePassword()
  {
    let generatedValue = this.ps.generatePassword();
    this.passwordResultService.setPasswordValue(generatedValue);
  };

}
