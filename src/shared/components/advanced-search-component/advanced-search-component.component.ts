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
  constructor() {
    this.showGuestDropdown = false;
    this.showRoomDropdown = false;
    this.rooms = 0;
   }

  ngOnInit() { }

  onSelectGuest() {
    this.showGuestDropdown = !this.showGuestDropdown;
  }

  onSelectRoom() {
    this.showRoomDropdown = !this.showRoomDropdown;
  }
}
