import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {MobileHomePageComponent} from '../pages/mobile-home-page/mobile-home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '\mobile-home', component: MobileHomePageComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
