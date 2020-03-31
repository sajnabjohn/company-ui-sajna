import { AuthService } from 'src/app/shared/services/auth.service';
import { PublicationSubAgent } from 'src/app/shared/models/publication-sub-agent';
import { Publication } from './../../../shared/models/publication';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpConnectionService } from './../../../shared/services/http-connection.service';
import { apis } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AgentDashboardService {

  constructor(private authService:AuthService, private httpService: HttpConnectionService) { }

  //get publication details
  getPublicationDetails(agentCode:string): Observable<Publication[]> {
    return this.httpService.get(`${apis.agents.pub_details}/${agentCode}`)
      .pipe(map(response => {
        console.log(response['payload'].pub_details)
        return response['payload'].pub_details.map((publication: any) => {
          return {
            agentCode: publication.agent,
            publicationCode: publication.pub.pub_code,
            publicationName: publication.pub.pub_name,
            company: publication.company,
            paidCopy:publication.pub_copy_paid,
            freeCopy: publication.pub_copy_free
          }
        });
      }))
  }
  getPublicationsSubagents(): Observable<PublicationSubAgent[]> {
    let agentCode = this.authService.currentUserValue.user.code;
    return this.httpService.get(`${apis.pubications.pubications_sub_agents}/${agentCode}`)
      .pipe(map((response: any) => {
        return response['payload'].publications.map((publication: any) => {
          return {
            id: publication.pub_code,
            name: publication.pub_name,
            subAgents: publication.sub_agents.map((subAgent: any) => {
              return {
                code: subAgent.sub_agnt,
                name: subAgent.sub_agnt_name,
                edition: subAgent.ed_name,
                unit: subAgent.unit_code,
                copyTypes: subAgent.copy_types.map((copyType: any) => {
                  return {
                    id: copyType.subitem,
                    name: copyType.subitemtxt,
                    copies: copyType.pub_copy,
                    editable: copyType.editable_status
                  }
                })
              }
            })
          }
        })
      }))
  }
}

