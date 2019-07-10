import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

@NgModule({
  declarations: [RendezVousComponent],
  imports: [
    CommonModule,
    RendezVousRoutingModule
  ],
  entryComponents: [RendezVousComponent]
})
export class RendezVousModule { }
