/*
TODO:
- Rewrite functions to use more es6 syntax
- Consider moving 'Math.floor(Math.random )' calls into a resuable function
*/

import { Injectable } from '@angular/core';

@Injectable()
export class PasswordService
{


  constructor()
  { }

  generatePassword(): string
  {
    let passwordString = '';
    let passwordStringLength = Math.floor(Math.random() * 6) + 6;

    for (let i = 0; i < passwordStringLength; i++)
    {
      let functionCode = Math.floor(Math.random() * (0 - 3) + 1) + 3;

      switch (functionCode)
      {
        case 1:
          passwordString += this.getUpLetter();
          break;
        case 2:
          passwordString += this.getLowLetter();
          break;
        case 3:
          passwordString += this.getNumber();
          break;
        default:
          passwordString += this.getUpLetter();
      }
    }

    return passwordString;
  }

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

  getUpLetter()
  {
    let unicodeUppercaseLetter = Math.floor(Math.random() * (90 - 65 + 1)) + 65
    return String.fromCharCode(unicodeUppercaseLetter);
  };

  getLowLetter()
  {
    let unicodeLowercaseLetter = Math.floor(Math.random() * (122 - 97 + 1)) + 97
    return String.fromCharCode(unicodeLowercaseLetter);
  };

}
