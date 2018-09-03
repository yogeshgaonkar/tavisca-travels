import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TravelMaterialModule } from './travel-material.module';
import {PagesModule} from '../pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, PagesModule, TravelMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
