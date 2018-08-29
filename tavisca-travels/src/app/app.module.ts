import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import {PagesModule} from '../pages/pages.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatButtonModule,
     MatCheckboxModule, AppRoutingModule,PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
