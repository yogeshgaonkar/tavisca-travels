import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {SeachServiceService} from '../../services/seach-service.service';
import {UiUtilsService} from '../../shared/helpers/ui-utils.service';

@Component({
  selector: 'app-mobile-home-page',
  templateUrl: './mobile-home-page.component.html',
  styleUrls: ['./mobile-home-page.component.scss']
})
export class MobileHomePageComponent implements OnInit {

  searchContainerBorder: String = '';
  HotelSearchVal: String = '';
  options: string[] = [];
  showAdvancedSearch: boolean;
  showHotelSearchVal: boolean;
  isSearchActive = false;
  constructor( private searchService: SeachServiceService, private uiUtils: UiUtilsService, private router: Router) { }

  ngOnInit() {
    this.searchService.getListOfCountries().subscribe( (res) => {
      this.options = res['countries'];
  });

  this.uiUtils.getWindowResize().subscribe({
    next: (data) => {
      this.resizePage(data.deviceType);
    }
  });
  }

  resizePage(deviceType) {
    if (deviceType !== 'sm' && deviceType !== 'xs' ) {
     this.router.navigateByUrl('');
     }
   }

  focusFunction() {
    this.searchContainerBorder = 'search-field-border';
    this.showHotelSearchVal = true;
    this.isSearchActive = true;
    this.showAdvancedSearch = false;
  }


  selectCountry(option) {
    this.HotelSearchVal = option.name;
    this.showAdvancedSearch = true;
  }

  clearSearch() {
    this.searchContainerBorder = '';
    this.HotelSearchVal = '';
    this.isSearchActive = false;
    this.showAdvancedSearch = false;
    this.showHotelSearchVal = false;
  }
}
