import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvenementComponent } from './evenement/evenement.component';

const routes: Routes = [{
  path: '',
  component: EvenementComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
