import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function PasswordValidator(): ValidatorFn {
  return function (control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    return PASSWORD_REGEX.test(control.value)
      ? null
      : { invalidPasswordFormat: true };
  };
}
