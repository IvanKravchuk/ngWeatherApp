import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.css']
})
export class CurrentLocationComponent implements OnInit {

  @Output() getC = new EventEmitter;

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  getForecastByCoordinates() {
    return this.getC.emit();
  }
}
