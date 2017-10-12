import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminListeUsagerComponent } from './admin-liste-usager/admin-liste-usager.component';
import  {AdminUsagerComponent} from './admin-usager/admin-usager.component';

const routes : Routes = [    
    { path : 'usagers', component : AdminListeUsagerComponent},
    { path : 'usager', component : AdminUsagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
