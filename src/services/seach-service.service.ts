import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeachServiceService {

  constructor(private httpClient: HttpClient) { }

  getListOfCountries() {
    return this.httpClient.get('api/countries.json');
  }
}
