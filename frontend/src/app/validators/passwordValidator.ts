import { AbstractControl } from '@angular/forms';

export function ValidatePasswordUpperCase(control: AbstractControl) {
  if (!/[A-Z]/.test(control.value)) {
    return { noUpperCase: true };
  }
  return null;
}

export function ValidatePasswordLowerCase(control: AbstractControl) {
  if (!/[a-z]/.test(control.value)) {
    return { noLowerCase: true };
  }
  return null;
}

export function ValidatePasswordNumber(control: AbstractControl) {
  if (!/[0-9]/.test(control.value)) {
    return { noNumber: true };
  }
  return null;
}