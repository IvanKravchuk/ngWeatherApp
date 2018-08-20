import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiKey = '25fbfa1ce2c006ee671a84feda01e493';
  url;

  constructor(private http: HttpClient) {
    this.url = 'https://api.openweathermap.org/data/2.5/weather?q=';
   }

  getCurrentForecastByName(cityName): Observable<any> {
    console.log(this.url + cityName + '&appid' + this.apiKey);
    return this.http.get(this.url + cityName + '&appid=' + this.apiKey)
    .pipe(map((res: Response) => res.json()));
  }
}
