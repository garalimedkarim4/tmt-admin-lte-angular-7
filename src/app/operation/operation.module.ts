import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';
import { OperationComponent } from './operation/operation.component';

@NgModule({
  declarations: [OperationComponent],
  imports: [
    CommonModule,
    OperationRoutingModule
  ],
  entryComponents: [OperationComponent]
})
export class OperationModule { }
