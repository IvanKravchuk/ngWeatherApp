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

  // @Input() private forecastDay: ForecastDay;
  private cityName: string;
  private forecastDay: ForecastDay;

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/forecastByLocation' ) {
      this.http.getCoordsnates().then(c => {
        this.http.getCurrentForecastInHoursByCoordinates(c).subscribe(data => this.forecastDay = new ForecastDay(data as any));
      });
    }
    this.http.myMethod$.subscribe((data1) => {
    if (this.router.url === '/forecastByCityName' ) {
      console.log(this.cityName);
        this.cityName = data1;
        this.http.getCurrentForecastInHoursByName(this.cityName).subscribe(data => this.forecastDay = new ForecastDay(data as any));
      }
    }
  );
  }

}
