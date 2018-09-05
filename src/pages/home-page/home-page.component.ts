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
  constructor( private searchService: SeachServiceService ) { }

  ngOnInit() {
    this.searchService.getListOfCountries().subscribe( (res) => {
      this.options = res['countries'];
  });
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
  selectCountry(option) {
    console.log('selected option', option);
  }

}
