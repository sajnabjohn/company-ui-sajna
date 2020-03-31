import { SubAgent } from 'src/app/shared/models/sub-agent';
import { CopyType } from 'src/app/shared/models/copy-type';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-indent-updation',
  templateUrl: './indent-updation.component.html',
  styleUrls: ['./indent-updation.component.scss']
})
export class IndentUpdationComponent implements OnInit {

  copyDetails:CopyType;
  subAgent:SubAgent;
  selectedType:boolean;
  selectedStatus:boolean
  
  constructor(private router:Router, private location: Location) {
    this.getCopyDetails();
  }

  ngOnInit() {
  }

  // get copy details
  getCopyDetails(){
    const state = this.router.getCurrentNavigation().extras.state;
    if (state){
      this.subAgent = state.subAgent;
      this.copyDetails = state.copyType;
      console.log(this.copyDetails)
    }
    else
      this.router.navigate(['/agent/dashboard']);
  }

}
