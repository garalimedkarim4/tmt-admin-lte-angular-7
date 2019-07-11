import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisponibiliteMedecinComponent } from './disponibilite-medecin/disponibilite-medecin.component';

const routes: Routes = [{
  path: '',
  component: DisponibiliteMedecinComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisponibiliteMedecinRoutingModule { }
