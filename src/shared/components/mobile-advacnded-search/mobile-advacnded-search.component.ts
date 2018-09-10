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
  isAdvancedSearch = false;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  rangeValue: Date[];
  checkOutDateText = 'Check Out';
  checkInDateText = 'Check In';
  checkInDate = new Date();
  checkOutDate = new Date();
  weekdayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  constructor(public dialog: MatDialog) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

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

  expanAdvancedSearch() {
    this.isAdvancedSearch = !this.isAdvancedSearch;
  }
  getFormatedDate() {
    this.checkInDate = this.rangeValue[0];
    this.checkOutDate = this.rangeValue[1];
    this.setDateValues();
  }

  setDateValues() {
    this.checkOutDateText = this.weekdayList[this.checkInDate.getDay()] +
    ' ' + this.checkInDate.getDate() + ' ' + this.monthsNames[this.checkInDate.getMonth()] + ' ' + this.checkOutDate.getFullYear();
   this.checkInDateText = this.weekdayList[this.checkOutDate.getDay()] +
    ' ' + this.checkOutDate.getDate() + ' ' + this.monthsNames[this.checkOutDate.getMonth()] + ' ' + this.checkOutDate.getFullYear();
  }
}
