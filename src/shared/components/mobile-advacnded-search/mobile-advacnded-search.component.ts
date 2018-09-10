import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {GuestMobileComponent} from '../guest-mobile/guest-mobile.component';
@Component({
  selector: 'app-mobile-advacnded-search',
  templateUrl: './mobile-advacnded-search.component.html',
  styleUrls: ['./mobile-advacnded-search.component.scss'],
  providers: [MatDialog],
})
export class MobileAdvacndedSearchComponent implements OnInit {
  dialogRef: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialogRef = this.dialog.open(GuestMobileComponent, {
      width: 'auto',
      data: {
        onDailogClose: this.dialogRef
      }
    });
  }


}
