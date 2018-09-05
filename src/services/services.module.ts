import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeachServiceService } from './seach-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [SeachServiceService],
  declarations: [],
})
export class ServicesModule { }
