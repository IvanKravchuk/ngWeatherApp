import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { ForecastDay } from '../classes/forecast-day';

function getWindow (): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  apiKey = '25fbfa1ce2c006ee671a84feda01e493';
  baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  public cityName: string;
  // private coordinates: Object;
  myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();


  constructor(private http: HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data) { 
    this.myMethodSubject.next(data);
  }

  ngOnInit(): void {
    // this.setCoordsnates();
  }

  getCurrentForecastByName(cityName): Observable<any> {
    console.log(this.baseUrl + cityName + '&appid' + this.apiKey);
    return this.http.get(this.baseUrl + cityName + '&appid=' + this.apiKey);
  }

  getCurrentForecastInHoursByName(cityName): Observable<ForecastDay> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<ForecastDay>('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',UA&appid=' + this.apiKey + '&units=metric');
  }

  getCoordsnates() {
    return new Promise(res => {
      this.setCoordsnates(c => {
        res(c);
      });
    });
  }

  setCoordsnates (callback){
    const window = getWindow();
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
        callback({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      });
    }
  }

  getCurrentForecastInHoursByCoordinates(coordinates): Observable<ForecastDay> {
    const search: URLSearchParams = new URLSearchParams();
    // tslint:disable-next-line:radix
    search.set('lat', parseInt(coordinates.lat).toString());
    // tslint:disable-next-line:radix
    search.set('lon', parseInt(coordinates.lon).toString());
    search.set('appid', this.apiKey);
    search.set('units', 'metric');

    return this.http.get<ForecastDay>('https://api.openweathermap.org/data/2.5/forecast?' + search.toString() );
  }

  // getCoordsnates() {
  //   return new Observable((observer) => {
  //     const window = getWindow();
  //     if (window.navigator.geolocation) {
  //       window.navigator.geolocation.getCurrentPosition(function(pos) {
  //         observer.next({ lat: pos.coords.latitude, lon: pos.coords.longitude });
  //       });
  //     }
  //   });
  // }
}
