import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelSeachFilterPipe} from './hotel-search-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HotelSeachFilterPipe ],
  exports: [ HotelSeachFilterPipe ]
})
export class PipesModule { }
