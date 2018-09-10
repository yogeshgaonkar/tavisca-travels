import { Component, OnInit } from '@angular/core';
import {SeachServiceService} from '../../services/seach-service.service';
import {UiUtilsService} from '../../shared/helpers/ui-utils.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ SeachServiceService, UiUtilsService ]
})
export class HomePageComponent implements OnInit {

  searchContainerBorder: String = '';
  HotelSearchVal: String = '';
  options: string[] = [];
  showAdvancedSearch: boolean;
  showHotelSearchVal: boolean;
  constructor( private searchService: SeachServiceService, private uiUtils: UiUtilsService, private router: Router ) { }

  ngOnInit() {
    this.searchService.getListOfCountries().subscribe( (res) => {
      this.options = res['countries'];
  });
  this.resizePage(this.uiUtils.getDeviceCategory());
  this.uiUtils.getWindowResize().subscribe({
    next: (data) => {
      this.resizePage(data.deviceType);
    }
  });
  }

  resizePage(deviceType) {
   if (deviceType === 'sm' || deviceType === 'xs' ) {
    this.router.navigateByUrl('/mobile-home');
    }
  }

  focusFunction() {
    this.searchContainerBorder = 'search-field-border';
    this.showHotelSearchVal = true;
  }

  focusOutFunction() {
    this.searchContainerBorder = '';
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
