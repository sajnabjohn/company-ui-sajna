import { Injectable } from '@angular/core';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(public dialog: MatDialog) { }

  confirmDialog(message, callback): void {
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      callback(dialogResult);
    });
  }

  todayDate() {
    let d = new Date();
    let month = ('' + (d.getMonth() + 1)).length < 2 ? ('0' + (d.getMonth() + 1)) : ('' + (d.getMonth() + 1));
    let day = ('' + d.getDate()).length < 2 ? ('0' + d.getDate()) : ('' + d.getDate());
    let year = d.getFullYear();
    return [year, month, day].join('-');
  }
}

export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumSignificantDigits: 3
})