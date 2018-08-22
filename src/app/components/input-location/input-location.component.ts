import { Component, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input-location',
  templateUrl: './input-location.component.html',
  styleUrls: ['./input-location.component.css']
})
export class InputLocationComponent {

  @Output() disableForecastTenDays = new EventEmitter();
  cityName: string;

  constructor(private http: HttpService, private router: Router) {
    this.cityName = '';
  }

  routeToForecastByCityName() {
    this.http.passDataByStream(this.cityName);
    this.router.navigate(['/forecastByCityName']);
    return this.disableForecastTenDays.emit(false);
  }
}
