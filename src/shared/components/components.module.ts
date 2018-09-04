import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelMaterialModule } from '../../app/travel-material.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { AdvancedSearchComponentComponent } from './advanced-search-component/advanced-search-component.component';

@NgModule({
  imports: [
    CommonModule, TravelMaterialModule
  ],
  declarations: [ HomeHeaderComponent, AdvancedSearchComponentComponent ],
  exports: [ HomeHeaderComponent, AdvancedSearchComponentComponent ]
})
export class ComponentsModule { }
