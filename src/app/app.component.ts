import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private data: any;

  constructor( private http: HttpService) {}

  ngOnInit(): void {
    this.http.getCurrentForecastByName('London').subscribe(data => this.data = data.id);
  }
}
