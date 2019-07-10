import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedecinRoutingModule } from './medecin-routing.module';
import { MedecinComponent } from './medecin/medecin.component';

@NgModule({
  declarations: [MedecinComponent],
  imports: [
    CommonModule,
    MedecinRoutingModule
  ],
  // entryComponents: [MedecinComponent],
  // bootstrap: [MedecinComponent]
})
export class MedecinModule { }
