import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoyageRoutingModule } from './voyage-routing.module';
import { VoyageComponent } from './voyage/voyage.component';

@NgModule({
  declarations: [VoyageComponent],
  imports: [
    CommonModule,
    VoyageRoutingModule
  ],
  entryComponents: [VoyageComponent]
})
export class VoyageModule { }
