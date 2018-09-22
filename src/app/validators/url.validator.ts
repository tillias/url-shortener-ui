import {AbstractControl} from '@angular/forms';

const urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
const urlRegex = new RegExp(urlPattern);

export function ValidateUrl(control: AbstractControl) {
  if (!urlRegex.test(control.value)) {
    return {validUrl: true};
  }


  return null;
}
