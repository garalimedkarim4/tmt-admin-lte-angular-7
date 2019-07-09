import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionaRoutingModule } from './accordiona-routing.module';
import { AccordionaComponent } from './accordiona.component';

import { AccordionModule as MkAccordionModule, BoxModule } from 'angular-admin-lte';


@NgModule({
  imports: [
    CommonModule,
    AccordionaRoutingModule,
    MkAccordionModule,
    BoxModule
  ],
  declarations: [AccordionaComponent]
})
export class AccordionModule { }
