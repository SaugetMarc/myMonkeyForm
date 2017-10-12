import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { AppAuthComponent } from './app-auth/app-auth.component';

import {AdminModule} from './admin/admin.module';
import {MyFormsModule} from './my-forms/my-forms.module';

// Import des routes
import { AppRoutingModule } from './app-routing.module';



// Import des composants locaux
import { DashboadComponent } from './core/dashboard/dashboad/dashboad.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAuthComponent,
    DashboadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule, 
    AdminModule,

    MyFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
