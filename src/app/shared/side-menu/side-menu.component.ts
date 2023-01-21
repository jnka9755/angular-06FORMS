import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './template/basics'
    },
    {
      text: 'Dinámicos',
      route: './template/dynamics'
    },
    {
      text: 'Switchs',
      route: './template/switchs'
    }
  ];

  public reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      route: './reactive/basics'
    },
    {
      text: 'Dinámicos',
      route: './reactive/dynamics'
    },
    {
      text: 'Switchs',
      route: './reactive/switchs'
    }
  ];

  public authMenu: MenuItem[] = [
    {
      text: 'Iniciar Sesión',
      route: './auth/login'
    },
    {
      text: 'Registro',
      route: './auth/register'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  } 
}
