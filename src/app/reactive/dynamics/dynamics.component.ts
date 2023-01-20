import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {

  public gameForm: FormGroup = this.formBuilder.group({
    name: [ , [ Validators.required, Validators.minLength(3) ]],
    gameFavorites: this.formBuilder.array( [
      ['Heroes of the Storm'],
      ['Call of Duty War Zone'],
      ['Age of Empires']
    ], Validators.required )
  });

  public newGameFavorite: FormControl = this.formBuilder.control( '' , Validators.required);

  get gameFavoritesArr(){
    return this.gameForm.get('gameFavorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  validateField(field: string){
    return this.gameForm.controls[field].errors 
            && this.gameForm.controls[field].touched
  }

  addElement(){
    if(this.newGameFavorite.invalid) return;

    // this.gameFavoritesArr.push( new FormControl ( this.newGameFavorite.value, [ Validators.required ] ) );
    this.gameFavoritesArr.push(  this.formBuilder.control(this.newGameFavorite.value, [ Validators.required ] ));
    this.newGameFavorite.reset();
  }

  deleteElement(index: number){
    this.gameFavoritesArr.removeAt(index);
  }

  save(){
    if(this.gameForm.invalid) {
      this.gameForm.markAllAsTouched();
      return;
    }
    console.log(this.gameForm.value);
    this.gameForm.reset();
  }
}
