import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  // public productForm: FormGroup = new FormGroup({
  //   name: new FormControl('RTX 4090'),
  //   price: new FormControl(50000),
  //   existences: new FormControl(5)
  // })

  public productForm : FormGroup = this.formBuilder.group({
    name: [ , [ Validators.required, Validators.minLength(3) ]],
    price: [ , [ Validators.required, Validators.min(0) ]],
    existences:[ , [ Validators.required, Validators.min(0) ]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setValueFields();
  }

  validateField(field: string){
    return this.productForm.controls[field].errors 
            && this.productForm.controls[field].touched
  }

  setValueFields(){
    this.productForm.reset({
      name: 'RTX 4090',
      price: 2500,
      existences: 23
    })
  }

  save(){

    if(this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    console.log(this.productForm.value);
    this.productForm.reset();
  }
}
