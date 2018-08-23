import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ForecastDay } from '../../classes/forecast-day';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.css']
})
export class CurrentForecastComponent implements OnInit {

  private forecastDay: ForecastDay;

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/forecastByLocation' ) {
      this.http.getCoordinates().then(coordinates => {
        this.http.getCurrentForecastInHoursByCoordinates(coordinates).subscribe(data => this.forecastDay = new ForecastDay(data as any));
      });
    }
    this.http.serviceStream$.subscribe((cityName) => {
    if (this.router.url === '/forecastByCityName' ) {
        this.http.getCurrentForecastInHoursByName(cityName).subscribe(data => this.forecastDay = new ForecastDay(data as any));
      }
    }
  );
  }

}
