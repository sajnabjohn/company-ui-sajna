import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/shared/models/agent';
import { AgentProfileService } from '../../services/agent-profile.service';
import { agentData } from 'src/app/shared/data/data';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit {

  agent: Agent;
  constructor(
    private agentProfileService: AgentProfileService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.agent = agentData;
    this.getAgentProfile();
  }
  
  // Get agent profile
  getAgentProfile(){
    this.agentProfileService.getAgentProfile().subscribe( (agent:Agent) => {
      this.agent = agent;
    });
  }

  // Logout
  onLogout() {
    this.authService.logout();
  }
}
