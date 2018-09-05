import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  searchContainerBorder: String = '';
  HotelSearchVal: String = '';
  options: string[] = ['One', 'Two', 'Three'];
  showAdvancedSearch: boolean;
  constructor() { }

  ngOnInit() {
  }

  focusFunction() {
    this.searchContainerBorder = 'search-field-border';
  }

  focusOutFunction() {
    this.searchContainerBorder = '';
  }

  showAdvancedSearchOptions() {
    this.showAdvancedSearch = true;
  }

}
