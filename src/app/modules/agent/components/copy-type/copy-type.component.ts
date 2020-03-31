import { Component, OnInit, Input } from '@angular/core';
import { SubAgent } from 'src/app/shared/models/sub-agent';
import { CopyType } from 'src/app/shared/models/copy-type';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-copy-type',
  templateUrl: './copy-type.component.html',
  styleUrls: ['./copy-type.component.scss']
})
export class CopyTypeComponent implements OnInit {

  @Input() selectedSubAgent: SubAgent[];
  displayColumns: string[] = ['Copy Type', 'Copies', ' ']

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  indetUpdation(copyType: CopyType) {
    this.router.navigate(['/agent/indent-updation'], {state: {
      subAgent: this.selectedSubAgent,
      copyType: copyType
    }})
  }
}
