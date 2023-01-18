import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swichs',
  templateUrl: './swichs.component.html',
  styleUrls: ['./swichs.component.css']
})
export class SwichsComponent implements OnInit {


  public person = {
    gender: '',
    notifications: true
  }

  public termsConditions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
