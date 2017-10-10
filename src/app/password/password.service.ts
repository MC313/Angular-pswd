/*
TODO:
- Rewrite functions to use more es6 syntax
- Consider moving 'Math.floor(Math.random )' calls into a resuable function
- Experiment with replacing switch statement with Object literal 
*/

import { Injectable } from '@angular/core';

//Javascript password strength library developed by Dropbox
import * as zxcvbn from 'zxcvbn';

@Injectable()
export class PasswordService
{

  constructor()
  { }

  generatePassword()
  {
    let passwordVal: string;
    let passwordScore: number = 0;
    let strongPassword: string;

    while (passwordScore < 4)
    {
      passwordVal = this.createPasswordString();
      passwordScore = this.checkPasswordStrength(passwordVal);
    }

    strongPassword = passwordVal;
    return strongPassword;
  }


  checkPasswordStrength(password: string)
  {
    let passwordStrength: any;
    passwordStrength = zxcvbn(password);
    return passwordStrength.score;
  };

  createPasswordString(): string
  {
    let passwordString: string = '';
    let passwordStringLength: number = Math.floor(Math.random() * 6) + 6;

    for (let i = 0; i < passwordStringLength; i++)
    {
      let functionCode: number = Math.floor(Math.random() * (3 - 0)) + 1;
      switch (functionCode)
      {
        case 1:
          passwordString += this.getUppercaseLetter();
          break;
        case 2:
          passwordString += this.getLowercaseLetter();
          break;
        case 3:
          passwordString += this.getNumber();
          break;
        default:
          passwordString += this.getUppercaseLetter();
      }
    }
    return passwordString;
  };

  getNumber()
  {
    let number = Math.floor(Math.random() * (11 - 0)) + 0
    return number.toString();
  };

  getSpecialCharacter()
  {
    let charArray = ['!', '@', '#', '$', '%', '&', '?'];
    return charArray[Math.round(Math.random() * 6)];
  };

  getUppercaseLetter()
  {
    let unicodeUppercaseLetter = Math.floor(Math.random() * (90 - 65 + 1)) + 65
    return String.fromCharCode(unicodeUppercaseLetter);
  };

  getLowercaseLetter()
  {
    let unicodeLowercaseLetter = Math.floor(Math.random() * (122 - 97 + 1)) + 97
    return String.fromCharCode(unicodeLowercaseLetter);
  };

}
