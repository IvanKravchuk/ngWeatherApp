import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-ten-days-forecast',
  templateUrl: './ten-days-forecast.component.html',
  styleUrls: ['./ten-days-forecast.component.css']
})
export class TenDaysForecastComponent implements OnInit {
  public data: Object;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.http.getCurrentForecastTenDays(this.http.cityName).subscribe(data => this.data = data);
  }
}
