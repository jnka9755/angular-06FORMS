import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { emailPattern, namePattern, validateUserName } from 'src/app/shared/validators/validations';
import { ValidationsService } from '../../../shared/services/validations-services.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = this.formBuilder.group({
    name: [ , [ Validators.required, Validators.pattern(this.validationsService.namePattern) ]],
    email: [ , [ Validators.required, Validators.pattern(this.validationsService.emailPattern) ], [ this.emailValidatorService ]],
    userName: [ , [ Validators.required, this.validationsService.validateUserName ]],
    password: [ , [ Validators.required, Validators.minLength(6) ]],
    repeatPassword: [ , [ Validators.required ]]
  },{
    validators: [ this.validationsService.validatePasswords('password', 'repeatPassword') ]
  })

  get spanEmail(): string {
    const errors = this.registerForm.get('email')?.errors;

    if(errors?.['required']) return 'El correo es obligatorio';
    if(errors?.['pattern']) return 'El valor ingresado no tiene el formato de correo';
    if(errors?.['mailUse']) return 'El correo ya se encuentra en uso';

    return'';
  }

  constructor(private formBuilder: FormBuilder, 
              private validationsService: ValidationsService,
              private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
    this.registerForm.reset({
      name: 'Juan Camilo',
      email: 'test1@test.com',
      userName: 'jnka55',
      password: '123456',
      repeatPassword: '123456'
    })
  }

  validateField(field: string){
    return this.registerForm.get(field)?.invalid
            && this.registerForm.get(field)?.touched
  }

  save(){
    console.log(this.registerForm.value);

    this.registerForm.markAllAsTouched();
  }
}
