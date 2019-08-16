import * as zxcvbn from 'zxcvbn';

export class PswdGenerator {

  static generate(): string {
    let passwordValue = this.createPasswordString();
    if (this.checkPasswordStrength(passwordValue) > 3) return passwordValue;
    return this.generate();
  }

  private static checkPasswordStrength(password: string) {
    return zxcvbn(password) && zxcvbn(password).score;
  };

  private static createPasswordString(): string {
    let passwordString: string = '';
    let passwordStringLength: number = Math.floor(Math.random() * 6) + 6;

    for (let i = 0; i < passwordStringLength; i++) {
      let functionCode: number = this.inclusiveRandomNumber(0, 2);
      passwordString += this.getPasswordChar(functionCode);
    }
    return passwordString;
  };

  private static getPasswordChar(functionCode): string | number {
    switch (functionCode) {
      case 0:
        return this.getUppercaseLetter();
        break;
      case 1:
        return this.getLowercaseLetter();
        break;
      case 2:
        return this.inclusiveRandomNumber(0, 11);
        break;
      default:
        return this.getUppercaseLetter();
    }
  }

  private static getSpecialCharacter(): string {
    let charArray = ['!', '@', '#', '$', '%', '&', '?'];
    return charArray[this.inclusiveRandomNumber(0, 6)];
  };

  private static getUppercaseLetter(): string {
    let unicodeUppercaseLetter = this.inclusiveRandomNumber(65, 90);
    return String.fromCharCode(unicodeUppercaseLetter);
  };

  private static getLowercaseLetter(): string {
    let unicodeLowercaseLetter = this.inclusiveRandomNumber(97, 122);
    return String.fromCharCode(unicodeLowercaseLetter);
  };

  private static inclusiveRandomNumber(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
