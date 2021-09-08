import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public locations: Location[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Location[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.locations = result;
    }, error => console.error(error));
  }
}

interface Location {
  description: string[];
}
