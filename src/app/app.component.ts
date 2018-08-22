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

  public disabled: boolean;
  private forecastDay: ForecastDay;
  private subscriber: Subscription;

  constructor (private http: HttpService, private router: Router) {
    this.disabled = true;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  redirectToTenDaysForecast() {
    this.router.navigate(['/forecastTenDays']);
  }

  disableForecastTenDays(disabled: boolean) {
    this.disabled = disabled;
  }
}
