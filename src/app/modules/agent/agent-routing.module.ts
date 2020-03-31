import { AgentDashboardComponent } from './components/agent-dashboard/agent-dashboard.component';
import { AuthGuard } from 'src/app/shared/services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubAgentsComponent } from './components/sub-agents/sub-agents.component';
import { AgentComponent } from './agent.component';
import { IndentUpdationComponent } from './components/indent-updation/indent-updation.component';

const routes: Routes = [
  {
    path: '',
    component: AgentComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: 'dashboard', component: AgentDashboardComponent },
      // { path: 'sub-agents', component: SubAgentsComponent }
      {path:'dashboard', component:AgentDashboardComponent, canActivate: [AuthGuard]},
      {path:'sub-agents', component:SubAgentsComponent, canActivate: [AuthGuard]},
      {path:'indent-updation', component:IndentUpdationComponent, canActivate: [AuthGuard]}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }