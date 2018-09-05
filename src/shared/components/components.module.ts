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

@NgModule({
  imports: [
    CommonModule, TravelMaterialModule, MatGridListModule, MatCardModule
  ],
  declarations: [ HomeHeaderComponent, AdvancedSearchComponentComponent, SelectButtonComponent,
     HomeTitleComponent, HotelCardComponent, HomeFooterComponent ],
  exports: [ HomeHeaderComponent, AdvancedSearchComponentComponent,
    SelectButtonComponent, HomeTitleComponent, HotelCardComponent, HomeFooterComponent ]
})
export class ComponentsModule { }
