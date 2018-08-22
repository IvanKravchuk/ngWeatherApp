import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-forecast-hour',
  templateUrl: './current-forecast-hour.component.html',
  styleUrls: ['./current-forecast-hour.component.css']
})
export class CurrentForecastHourComponent implements OnInit {

  @Input() private forecastHour;

  constructor() { }

  ngOnInit() {}

}
