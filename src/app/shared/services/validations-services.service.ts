import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }


  validateUserName(control: FormControl): ValidationErrors | null {

    const value = control.value?.trim().toLowerCase();

    if( value == 'jnka') return { invalid: true }

    return null;
  }

  validatePasswords(password1: string, password2: string){

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(password1)?.value;
      const pass2 = formGroup.get(password2)?.value;

      if( pass1 !== pass2 ) {
        formGroup.get(password2)?.setErrors( { different: true } );
        return { different: true }
      }
      
      formGroup.get(password2)?.setErrors( null );

      return null;
    }
  }
}
