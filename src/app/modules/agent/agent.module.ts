import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';

import { AgentRoutingModule } from './../../modules/agent/agent-routing.module';
import { SharedModule } from './../../shared/modules/shared.module';
import { AgentDashboardComponent } from './components/agent-dashboard/agent-dashboard.component';
import { SubAgentsComponent } from 'src/app/modules/agent/components/sub-agents/sub-agents.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { AgentComponent } from './agent.component';
import { CopyTypeComponent } from './components/copy-type/copy-type.component';
import { IndentUpdationComponent } from './components/indent-updation/indent-updation.component';

@NgModule({
  declarations: [
    AgentDashboardComponent,
    SubAgentsComponent,
    AgentProfileComponent,
    AgentComponent,
    CopyTypeComponent,
    IndentUpdationComponent
  ],
  imports: [
    SharedModule,
    AgentRoutingModule,
    Ng2SearchPipeModule
  ],
  entryComponents: []
})
export class AgentModule { }