import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
  if (!/[A-Z]/.test(control.value) || 
    !/[a-z]/.test(control.value) ||
    !/[0-9]/.test(control.value)) {
    return { invalidPassword: true };
  }
  return null;
}