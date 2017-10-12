import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormsListeSurveyComponent } from './my-forms-liste-survey/my-forms-liste-survey.component';
import { MyFormsSurveyComponent } from './my-forms-survey/my-forms-survey.component';
import {MyFormsRoutingModule} from './my-forms-routing.modules';
import { MyFormsBuildComponent } from './my-forms-build/my-forms-build.component';

@NgModule({
  imports: [
    CommonModule, MyFormsRoutingModule
  ],
  declarations: [MyFormsListeSurveyComponent, MyFormsSurveyComponent, MyFormsBuildComponent], 
  exports : [MyFormsSurveyComponent]
})
export class MyFormsModule { } 
