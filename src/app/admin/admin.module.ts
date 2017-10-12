import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from './admin-routing.modules'

import { AdminListeUsagerComponent } from './admin-liste-usager/admin-liste-usager.component';
import  {AdminUsagerComponent} from './admin-usager/admin-usager.component';
import { AdminRoutingModule } from './admin-routing.modules'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ AdminUsagerComponent, AdminListeUsagerComponent], 
  exports : [AdminRoutingModule]
})
export class AdminModule { }
