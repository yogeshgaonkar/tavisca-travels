import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelMaterialModule } from '../../app/travel-material.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { AdvancedSearchComponentComponent } from './advanced-search-component/advanced-search-component.component';
import { SelectButtonComponent } from './select-button/select-button.component';

@NgModule({
  imports: [
    CommonModule, TravelMaterialModule
  ],
  declarations: [ HomeHeaderComponent, AdvancedSearchComponentComponent, SelectButtonComponent ],
  exports: [ HomeHeaderComponent, AdvancedSearchComponentComponent, SelectButtonComponent ]
})
export class ComponentsModule { }
