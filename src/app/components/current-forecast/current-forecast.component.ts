import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ForecastDay } from '../../classes/forecast-day';

@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.css']
})
export class CurrentForecastComponent implements OnInit {

  @Input() private forecastDay: ForecastDay;
  private cityName: string;

  constructor(private http: HttpService) { }

  ngOnInit() {}

}
