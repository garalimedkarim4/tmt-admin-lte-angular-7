import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoyageComponent } from './voyage/voyage.component';

const routes: Routes = [{
  path: '',
  component: VoyageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoyageRoutingModule { }
