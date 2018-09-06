import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-component',
  templateUrl: './advanced-search-component.component.html',
  styleUrls: ['./advanced-search-component.component.scss']
})
export class AdvancedSearchComponentComponent implements OnInit {
  showGuestDropdown: boolean;
  showRoomDropdown: boolean;
  guests: Array<Object> = [
    { title: 'Adults', total: 0, subTitle: '' },
    { title: 'Children', total: 0, subTitle: '(Up to 14 years)' },
    { title: 'Infants', total: 0, subTitle: '(Under 2 years)'}
  ];
  rooms: number;
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
  constructor() {
    this.showGuestDropdown = false;
    this.showRoomDropdown = false;
    this.rooms = 0;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
   }

  ngOnInit() {
    this.setDateValues();
   }

  onSelectGuest() {
    this.showGuestDropdown = !this.showGuestDropdown;
  }

  onSelectRoom() {
    this.showRoomDropdown = !this.showRoomDropdown;
  }

  clearRoom() {
    this.rooms = 0;
  }
  clearGuest() {
    this.guests.forEach((value: any) => {
      value.total = 0;
    });
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
