import { SubAgent } from 'src/app/shared/models/sub-agent';
import { CopyType } from 'src/app/shared/models/copy-type';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-indent-updation',
  templateUrl: './indent-updation.component.html',
  styleUrls: ['./indent-updation.component.scss']
})
export class IndentUpdationComponent implements OnInit {

  copyDetails:CopyType;
  subAgent:SubAgent;
  selectedType:string;
  selectedStatus:string;
  statusMapper  = { 0 : "P", 1 : "T" }
  typeMapper    = { 0 : "I", 1 : "D" }
  selectedDate: string;
  currentCopies: number;
  increaseCopies: number = 0;
  
  constructor(private router:Router, private location: Location,
              private notify: NotifyService) {
    this.getCopyDetails();
  }

  ngOnInit() {
    this.setDefaultValues();
  }

  //set default values
  setDefaultValues(){
    this.selectedStatus = '0';
    this.selectedType   = '0';
    this.selectedDate   = new Date().toISOString().substring(0, 10); 
  }
  // get copy details
  getCopyDetails(){
    // const state = this.router.getCurrentNavigation().extras.state;
    // if (state){
    //   this.subAgent = state.subAgent;
    //   this.copyDetails = state.copyType;
    //   console.log(this.copyDetails)
    // }
    // else
    //   this.router.navigate(['/agent/dashboard']);
      this.subAgent = { code: 'sa123',
                        name: 'Ashkar',
                        edition: 'e123',
                        unit: 'Kochi',
                        copyTypes: []
                      }
      this.copyDetails =
                        {
                          id: 'c123',
                          name: 'Weekly1111',
                          copies: 120,
                          editable: true,
                        }

        
    this.currentCopies = this.copyDetails.copies;
  }

  getTotalCopies(){
    if(!this.currentCopies){
      this.currentCopies = 0;
    }
    if(!this.increaseCopies){
      this.increaseCopies = 0;
    }
    return (this.currentCopies + this.increaseCopies);
  }

  submit(){
    console.log(this.selectedStatus);
    console.log(this.selectedType);
    console.log(this.selectedDate);
    console.log(this.increaseCopies)
    let isValid = this.validateFields();
    if(isValid){
      
    }
  }

  validateFields(){
    if(!this.selectedStatus){
      this.notify.showError("Please select the indent updation status(Permanent/Temporary)");
      return false;
    }
    if(!this.selectedType){
      this.notify.showError("Please select the indent updation type(Increase/Decrease");
      return false;
    }
    if(!this.selectedDate){
      this.notify.showError("Please select the date");
      return false;
    }
    if(this.increaseCopies <1){
      this.notify.showError("Please enter increase copies greater than zero");
      return false;
    }
    return true;
  }

}
