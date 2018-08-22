import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { ForecastDay } from '../classes/forecast-day';

function getWindow (): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiKey = '25fbfa1ce2c006ee671a84feda01e493';
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  public cityName: string;
  public serviceStream$: Observable<any>;
  private serviceSubject = new Subject<any>();


  constructor(private http: HttpClient) {
    this.serviceStream$ = this.serviceSubject.asObservable();
  }

  passDataByStream(data) {
    this.cityName = data;
    this.serviceSubject.next(data);
  }

  getCurrentForecastInHoursByName(cityName): Observable<ForecastDay> {
    const type = 'forecast?';
    const search: URLSearchParams = new URLSearchParams();
    search.set('q', cityName);
    search.set('appid', this.apiKey);
    search.set('units', 'metric');
    return this.http.get<ForecastDay>(this.baseUrl + type + search.toString());
  }

  getCurrentForecastInHoursByCoordinates(coordinates): Observable<ForecastDay> {
    const type = 'forecast?';
    const search: URLSearchParams = new URLSearchParams();
    search.set('lat', parseInt(coordinates.lat, 10).toString());
    search.set('lon', parseInt(coordinates.lon, 10).toString());
    search.set('appid', this.apiKey);
    search.set('units', 'metric');

    return this.http.get<ForecastDay>(this.baseUrl + type + search.toString());
  }

  getCurrentForecastTenDays(cityName): Observable<ForecastDay> {
    const type = 'forecast/daily?';
    const search: URLSearchParams = new URLSearchParams();
    search.set('q', cityName);
    search.set('appid', this.apiKey);
    search.set('units', 'metric');
    search.set('cnt', '10');
    return this.http.get<ForecastDay>(this.baseUrl + type + search.toString());
  }

  getCoordinates() {
    return new Promise(res => {
      this.setCoordinates(coordinates => {
        res(coordinates);
      });
    });
  }

  setCoordinates (callback) {
    const window = getWindow();
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        callback({ lat: position.coords.latitude, lon: position.coords.longitude });
      });
    }
  }
}
