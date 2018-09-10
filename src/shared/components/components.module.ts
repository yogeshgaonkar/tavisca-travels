import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelMaterialModule } from '../../app/travel-material.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { AdvancedSearchComponentComponent } from './advanced-search-component/advanced-search-component.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import {MatGridListModule, MatCardModule} from '@angular/material';
import { GuestDesktopComponent } from './guest-desktop/guest-desktop.component';
import { CounterComponent } from './counter/counter.component';
import { GuestComponent } from './guest/guest.component';
import { GuestMobileComponent } from './guest-mobile/guest-mobile.component';
import { CarousalComComponent } from './carousal-com/carousal-com.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { MobileAdvacndedSearchComponent } from './mobile-advacnded-search/mobile-advacnded-search.component';

@NgModule({
  imports: [
    CommonModule, TravelMaterialModule, MatGridListModule, MatCardModule, BsDatepickerModule.forRoot(), FormsModule
  ],
  declarations: [ HomeHeaderComponent, AdvancedSearchComponentComponent, SelectButtonComponent,
     HomeTitleComponent, HotelCardComponent, HomeFooterComponent, GuestDesktopComponent, CounterComponent, GuestComponent,
     CarousalComComponent, MobileAdvacndedSearchComponent, GuestMobileComponent ],
  exports: [ HomeHeaderComponent, AdvancedSearchComponentComponent, MobileAdvacndedSearchComponent,
    SelectButtonComponent, HomeTitleComponent, HotelCardComponent, HomeFooterComponent, CarousalComComponent, GuestMobileComponent]
})
export class ComponentsModule { }
