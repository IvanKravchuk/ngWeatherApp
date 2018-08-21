import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from './services/http.service';
import { ForecastDay } from './classes/forecast-day';
import { Subscriber, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private forecastDay: ForecastDay;
  private subscriber: Subscription;

  constructor (private http: HttpService, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  searchCityName(cityName: string) {
    this.http.getCurrentForecastInHoursByName(cityName).subscribe(data => this.forecastDay = new ForecastDay(data as any));
  }

  getCoordsnates() {
   this.subscriber = this.http.getCoordsnates().subscribe(coords => {
      this.http.getCurrentForecastInHoursByCoordinates(coords).subscribe(data => this.forecastDay = new ForecastDay(data as any));
    });
  }

  redirectToTenDaysForecast() {
    this.router.navigateByUrl('/forecastTenDays');
  }
}
