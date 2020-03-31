import { AgentDashboardService } from './../../services/agent-dashboard.service';
import { Router } from '@angular/router';
import { PublicationSubAgent } from 'src/app/shared/models/publication-sub-agent';
import { Publication } from './../../../../shared/models/publication';
import { Component, OnInit } from '@angular/core';
import { publicationData } from 'src/app/shared/data/data';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.scss']
})
export class AgentDashboardComponent implements OnInit {

  publicationDetails:Publication[];
  searchText:string;
  publicationsSubagents: PublicationSubAgent[];
  selectedPublicationSubagents: PublicationSubAgent;
  constructor(private router: Router,private agentDashboardService:AgentDashboardService) { }

  ngOnInit() {
    this.getPublicationDetails();
    this.agentDashboardService.getPublicationsSubagents().subscribe(
      (publications)=> this.publicationsSubagents = publications
    );
  }

  //get publication details
  getPublicationDetails(){
    // let agentCode = JSON.parse(localStorage.getItem('currentUser')).user.code;
    // this.agentDashboardService.getPublicationDetails(agentCode).subscribe( (PublicationDetails:Publication[]) => {
    //   this.publicationDetails = PublicationDetails;
    // },error => { 
    //   console.log(error)
    // })
    this.publicationDetails = [
      {
        agentCode: "dfgdfg",
        publicationCode: "fdf",
        publicationName: "fadfdaf",
        company: "adfadf",
        paidCopy:"dfdg",
        freeCopy: "dfdfda"
      },{
        agentCode: "dfgdfg",
        publicationCode: "fdf",
        publicationName: "fadfdaf",
        company: "adfadf",
        paidCopy:"dfdg",
        freeCopy: "dfdfda"
     }
    ]

  }

  // Select a publication
  selectPublication(publicationId: string) {
    this.selectedPublicationSubagents = this.publicationsSubagents.filter((publication: PublicationSubAgent)=> {return publication.id === publicationId})[0];
    this.router.navigate(['/agent/sub-agents'], { state: this.selectedPublicationSubagents })
  }
}
