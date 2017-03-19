import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password/password.service';

@Component({
  selector: 'pwg-password',
  templateUrl: './password.component.html',
  styleUrls: ['password.component.scss']
})
export class PasswordComponent implements OnInit
{

  result: string;

  constructor(private ps: PasswordService)
  { }

  ngOnInit()
  {

  }

  getNumber()
  {
    this.result = this.ps.generatePassword();
  };


  // getNumber()
  // {
  //   this.result = Math.round(Math.random() * 3) + 1;
  // };


}
