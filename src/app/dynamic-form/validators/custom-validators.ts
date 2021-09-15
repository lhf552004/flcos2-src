import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

export class CustomValidators {
  static required(errorMessage?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return isEmptyInputValue(control.value) ? { 'required': errorMessage || true } : null;
    }
  }

  static maxLength(maxLength: number, errorMessage?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const length: number = control.value ? control.value.length : 0;
      return length > maxLength ?
        { 'maxlength': errorMessage || `requiredLength : ${maxLength}, actualLength: ${length}` } :
        null;
    };
  }

  static minLength(minLength: number, errorMessage?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const length: number = control.value ? control.value.length : 0;
      return length < minLength ?
        { 'minLength': errorMessage || `requiredLength : ${minLength}, actualLength: ${length}` } :
        null;
    };
  }

  static in(list: any[], errorMessage?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      const inList: boolean = list.indexOf(control.value) > -1;
      return inList ?
        null :
        { 'in': errorMessage || `Acceptable Values : ${list.join(', ')}` }
        ;
    };
  };

  static notIn(list: any[], errorMessage?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      const inList: boolean = list.indexOf(control.value) > -1;
      return !inList ?
        null :
        { 'notIn': errorMessage || `Unacceptable Values : ${list.join(', ')}` }
        ;
    };
  };

  static hasInvalidCharacters(prohibitedCharacterList: any[], errorMessage?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      const inList: boolean = prohibitedCharacterList.some(x => control.value.indexOf(x) > -1);
      return !inList ?
        null :
        { 'invalidCharacter': errorMessage || `Prohibited Characters : ${prohibitedCharacterList.join(', ')}` }
        ;
    };
  };

  static hasNotAcceptableCharacters(acceptableCharacterList: any[], caseSensitive?: boolean, errorMessage?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }

      const convertedAcceptableCharacterList = caseSensitive ? acceptableCharacterList : acceptableCharacterList.map(x => x.toLowerCase());
      const convertedControlValue = caseSensitive ? control.value : control.value.toLowerCase();

      const invalidList: boolean = convertedControlValue.split('').some((x: string) => convertedAcceptableCharacterList.indexOf(x) === -1);
      return !invalidList ?
        null :
        { 'notAcceptableCharacter': errorMessage || `Acceptable Characters : ${acceptableCharacterList.join(', ')}` }
        ;
    };
  };

}
