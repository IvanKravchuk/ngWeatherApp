import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-input-location',
  templateUrl: './input-location.component.html',
  styleUrls: ['./input-location.component.css']
})
export class InputLocationComponent implements OnInit {

  @Output() searchCityName = new EventEmitter;
  cityName: string;

  constructor(private http: HttpService) {
    this.cityName = '';
  }

  ngOnInit() {
  }

  getForecast() {
    return this.searchCityName.emit(this.cityName);
  }
}
