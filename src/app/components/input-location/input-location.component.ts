import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-location',
  templateUrl: './input-location.component.html',
  styleUrls: ['./input-location.component.css']
})
export class InputLocationComponent implements OnInit {

  @Output() searchCityName = new EventEmitter;
  cityName: string;

  constructor(private http: HttpService, private router: Router) {
    this.cityName = '';
  }

  ngOnInit() {
  }

  getForecast() {
    // this.router.navigate(['']);
    return this.searchCityName.emit(this.cityName);
  }
}
