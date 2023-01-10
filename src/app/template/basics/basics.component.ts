import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {


 @ViewChild('productForm') productForm!: NgForm;

 
  constructor() { }

  ngOnInit(): void {
  }

  validateName():boolean {
    return this.productForm?.controls['product']?.invalid 
    && this.productForm?.controls['product']?.touched;
  }

  validatePrice():boolean {
    return this.productForm?.controls['price']?.value <= 0 
    && this.productForm?.controls['price']?.touched;
  }


  save(){
    console.log('Guardado correcto');
    this.productForm.resetForm();
  }

}
