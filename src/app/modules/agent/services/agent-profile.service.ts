import { AuthService } from 'src/app/shared/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpConnectionService } from 'src/app/shared/services/http-connection.service';
import { Observable } from 'rxjs';
import { Agent } from 'src/app/shared/models/agent';
import apis from 'src/app/config/api.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentProfileService {

  constructor(
    private httpService: HttpConnectionService,
    private authService: AuthService
    ) { }

  //get agent profile
  getAgentProfile(): Observable<Agent> {
    let agentCode: string = this.authService.currentUserValue.user.code;
    return this.httpService.get(`${apis.agents.profile}/${agentCode}`)
      .pipe(map((response: any) => {
        let agent = response['payload'].agent_profile;
        return {
          code: agent.agentcode,
          name: agent.name,
          place: agent.place,
          mobile: agent.mobile,
          email: agent.email,
          userIdMmsec: agent.userid_mmsec,
          status: agent.status,
          inspectorCode: agent.inspector_code,
          inspectorName: agent.inspector_name,
          inspectorMobile: agent.inspector_mobile
        }
      }));
  }
}
