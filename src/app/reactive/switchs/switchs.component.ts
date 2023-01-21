import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styleUrls: ['./switchs.component.css']
})
export class SwitchsComponent implements OnInit {

  public personForm: FormGroup = this.formBuilder.group({
    gender: [ 'M', [ Validators.required ] ],
    notifications: [ true , [ Validators.required ]],
    termsConditions: [false, [ Validators.required, Validators.requiredTrue ]]
  });

  public person = {
    gender: 'F',
    notifications: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personForm.reset({
      ...this.person,
      termsConditions: false
    });

    // this.personForm.get('termsConditions')?.valueChanges.subscribe( value => {
    //   console.log(value);
    // });

    this.personForm.valueChanges.subscribe( ({termsConditions, ...rest }) => {

      this.person = rest;
    });
  }

  save(){
    const formValue = { ...this.personForm.value };
    delete formValue.termsConditions;

    this.person = formValue;
  }
}
