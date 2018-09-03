import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelMaterialModule } from '../app/travel-material.module';

@NgModule({
  imports: [
    CommonModule,TravelMaterialModule
  ],
  declarations: [HomePageComponent]
})
export class PagesModule { }
