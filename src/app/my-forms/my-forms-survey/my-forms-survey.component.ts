import { Component, OnInit } from '@angular/core';
import {MyFormSurvey} from '../model/my-form-survey.model';

@Component({
  selector: 'app-my-forms-survey',
  templateUrl: './my-forms-survey.component.html',
  styleUrls: ['./my-forms-survey.component.css']
})
export class MyFormsSurveyComponent implements OnInit {
  
  myFormSurvey : MyFormSurvey;

    constructor() {
      this.myFormSurvey = new MyFormSurvey("Premier formulaire", "Un formulaire vraiment bien", "Moi");

     }

  ngOnInit() {
  }

}
