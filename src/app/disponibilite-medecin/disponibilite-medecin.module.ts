import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisponibiliteMedecinRoutingModule } from './disponibilite-medecin-routing.module';
import { DisponibiliteMedecinComponent } from './disponibilite-medecin/disponibilite-medecin.component';

@NgModule({
  declarations: [DisponibiliteMedecinComponent],
  imports: [
    CommonModule,
    DisponibiliteMedecinRoutingModule
  ],
  entryComponents: [DisponibiliteMedecinComponent]
})
export class DisponibiliteMedecinModule { }
