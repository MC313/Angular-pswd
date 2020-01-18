import * as zxcvbn from 'zxcvbn';

export class PswdGenerator {

  static generate(): string {
    let passwordValue = createPasswordString();
    if (isStrongPassword(passwordValue)) return passwordValue;
    return this.generate();
  }
}

function isStrongPassword(pswdValue) {
  return getPasswordStrength(pswdValue) > 3;
}

function getPasswordStrength(password: string) {
  return zxcvbn(password) && zxcvbn(password).score;
};

function createPasswordString(): string {
  let passwordString: string = '';
  let passwordStringLength: number = Math.floor(Math.random() * 6) + 6;

  new Array
  for (let i = 0; i < passwordStringLength; i++) {
    let functionCode: number = inclusiveRandomNumber(0, 2);
    passwordString += getPasswordChar(functionCode);
  }
  return passwordString;
};

function getPasswordChar(functionCode): string | number {
  switch (functionCode) {
    case 0:
      return getUppercaseLetter();
      break;
    case 1:
      return getLowercaseLetter();
      break;
    case 2:
      return inclusiveRandomNumber(0, 11);
      break;
    default:
      return getUppercaseLetter();
  }
}

function getSpecialCharacter(): string {
  let charArray = ['!', '@', '#', '$', '%', '&', '?'];
  return charArray[inclusiveRandomNumber(0, 6)];
};

function getUppercaseLetter(): string {
  let unicodeUppercaseLetter = inclusiveRandomNumber(65, 90);
  return String.fromCharCode(unicodeUppercaseLetter);
};

function getLowercaseLetter(): string {
  let unicodeLowercaseLetter = inclusiveRandomNumber(97, 122);
  return String.fromCharCode(unicodeLowercaseLetter);
};

function inclusiveRandomNumber(min, max): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

