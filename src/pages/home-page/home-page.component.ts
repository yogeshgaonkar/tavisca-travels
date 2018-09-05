import { Component, OnInit } from '@angular/core';
import {SeachServiceService} from '../../services/seach-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ SeachServiceService ]
})
export class HomePageComponent implements OnInit {

  searchContainerBorder: String = '';
  HotelSearchVal: String = '';
  options: string[] = [];
  showAdvancedSearch: boolean;
  showHotelSearchVal: boolean;
  constructor( private searchService: SeachServiceService ) { }

  ngOnInit() {
    this.searchService.getListOfCountries().subscribe( (res) => {
      this.options = res['countries'];
  });
  }

  focusFunction() {
    this.searchContainerBorder = 'search-field-border';
    this.showHotelSearchVal = true;
  }

  focusOutFunction() {
    this.searchContainerBorder = '';
   // this.showHotelSearchVal = false;
  }

  showAdvancedSearchOptions() {
    this.showAdvancedSearch = true;
    this.showHotelSearchVal = false;
  }

  selectCountry(option) {
    this.HotelSearchVal = option.name;
    this.showAdvancedSearch = true;
    this.showHotelSearchVal = false;
  }

  clearSearch() {
    this.HotelSearchVal = '';
    this.showAdvancedSearch = false;
  }

}
