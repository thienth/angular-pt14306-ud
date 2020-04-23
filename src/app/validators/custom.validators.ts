import { AbstractControl } from '@angular/forms';

export function urlValidator(control: AbstractControl) {
  if (control.value != ""  && (!control.value.startsWith('http') || !control.value.includes('.vn'))) {
    return { urlValid: true };
  }
  return null;
}