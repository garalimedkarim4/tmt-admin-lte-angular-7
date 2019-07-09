import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionaComponent } from './accordiona.component';

const routes: Routes = [{
  path: '',
  component: AccordionaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionaRoutingModule { }
