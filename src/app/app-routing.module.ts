import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppAuthComponent} from './app-auth/app-auth.component';
import {DashboadComponent} from './core/dashboard/dashboad/dashboad.component';


/**
 * Services
 */

import {AUTH_PROVIDERS} from './core/services/auth.service';
import {LoggedInGuard} from './core/guard/logged-in.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}, 
  { path: 'dashboard', component : DashboadComponent}, 
  { path :'auth', component : AppAuthComponent, canActivate : [LoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AUTH_PROVIDERS, LoggedInGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppRoutingModule {}