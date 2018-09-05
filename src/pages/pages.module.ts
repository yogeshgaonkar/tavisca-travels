import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelMaterialModule } from '../app/travel-material.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule, TravelMaterialModule, SharedModule, FormsModule
  ],
  declarations: [HomePageComponent]
})
export class PagesModule { }
