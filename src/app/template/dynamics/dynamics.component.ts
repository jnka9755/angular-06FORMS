import { Component, OnInit } from '@angular/core';
import { Person, Favorite } from '../interfaces/person.interface';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {


  public newGame: string = '';
  public person: Person = {
    name:'Juan',
    favorites: [
      { id: 1, name: 'Heroes of the Storm' },
      { id: 2, name: 'Call of Duty' }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }


  save(){
    console.log('Fomulario posteado');
  }

  addElement(){
    const game: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }

    this.person.favorites.push({ ...game });
    this.newGame = '';
  }

  deleteElement(index: number){
    this.person.favorites.splice(index, 1);
  }
}
