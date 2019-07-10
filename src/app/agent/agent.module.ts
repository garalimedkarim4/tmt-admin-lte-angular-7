import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent/agent.component';

@NgModule({
  declarations: [AgentComponent],
  imports: [
    CommonModule,
    AgentRoutingModule
  ],
  entryComponents: [AgentComponent]
})
export class AgentModule { }
