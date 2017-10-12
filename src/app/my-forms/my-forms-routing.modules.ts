import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { MyFormsListeSurveyComponent } from './my-forms-liste-survey/my-forms-liste-survey.component';
import  {MyFormsSurveyComponent} from './my-forms-survey/my-forms-survey.component';
import {MyFormsBuildComponent} from './my-forms-build/my-forms-build.component';

const routes : Routes = [
    { path : '', redirectTo: 'surveys', pathMatch: 'full'}, 
    { path : 'surveys', component : MyFormsListeSurveyComponent},
    { path : 'survey', component : MyFormsSurveyComponent} , 
    { path : 'surveyBuild', component : MyFormsBuildComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class MyFormsRoutingModule { }

