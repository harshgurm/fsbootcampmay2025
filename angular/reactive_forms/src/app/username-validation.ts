import { AbstractControl } from "@angular/forms";

export function UsernameValidation(control:AbstractControl) {
    if(control.value.toUpperCase() == "NAME" || control.value.toUpperCase() == "TEST"){
        console.log(control.value);
        return {
            invalidName: true
        }
    }
    return null;
}
