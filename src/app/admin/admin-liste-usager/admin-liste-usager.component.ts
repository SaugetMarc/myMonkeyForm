import { Component, OnInit } from '@angular/core';

import {Usager} from '../../core/models/usager-model';

@Component({
  selector: 'app-admin-liste-usager',
  templateUrl: './admin-liste-usager.component.html',
  styleUrls: ['./admin-liste-usager.component.css']
})
export class AdminListeUsagerComponent implements OnInit {

    usagers : Usager [];
    

  constructor() { 
    this.usagers = [];
    
  }

  ngOnInit() {
    this.usagers.push(new Usager("Doe", "John", "admin"));
  }

  ajouteUser(){
    console.log("Coucou");
  }

}
