import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PublicationSubAgent } from 'src/app/shared/models/publication-sub-agent';
import { SubAgent } from 'src/app/shared/models/sub-agent';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sub-agents',
  templateUrl: './sub-agents.component.html',
  styleUrls: ['./sub-agents.component.scss']
})
export class SubAgentsComponent implements OnInit {

  @ViewChild('searchBox', { static: true }) searchBox: ElementRef;
  publication: PublicationSubAgent | any;
  subAgents: SubAgent[];
  filteredSubAgents: SubAgent[];
  selectedSubAgent: SubAgent;
  displayColumns: string[] = ['Name', 'Agent Code', 'Edition'];

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.getPublication();
  }

  ngOnInit() {
    // Initialize sub agents
    this.subAgents = this.publication.subAgents;
    this.filteredSubAgents = this.publication.subAgents;
    this.selectedSubAgent = this.filteredSubAgents[0];
  }

  // Get selected publication details with subagent details
  getPublication() {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state)
      this.publication = state;
    else
      this.router.navigate(['/agent/dashboard']);
  }

  // Select sub agent
  selectSubAgent(subAgent: SubAgent) {
    this.selectedSubAgent = subAgent;
  }

  // Search sub agents by name, code, edition
  searchSubAgents() {
    this.filteredSubAgents = this.subAgents.filter((subAgent: SubAgent) => {
      return (
        subAgent.name.toLowerCase().includes(this.searchBox.nativeElement.value.trim().toLowerCase()) ||
        subAgent.code.toLowerCase().includes(this.searchBox.nativeElement.value.trim().toLowerCase()) ||
        subAgent.edition.toLowerCase().includes(this.searchBox.nativeElement.value.trim().toLowerCase())
        )
    });
    this.selectedSubAgent = this.filteredSubAgents ? this.filteredSubAgents[0] : null;
  }
}
