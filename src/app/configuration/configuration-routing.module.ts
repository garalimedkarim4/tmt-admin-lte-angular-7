import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationModule } from '../+layout/configuration/configuration.module';
import { ConfigurationComponent } from './configuration/configuration.component';

const routes: Routes = [{
  path: '',
  component: ConfigurationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
