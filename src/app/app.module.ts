import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { CurrentForecastComponent } from './components/current-forecast/current-forecast.component';
import { CurrentLocationComponent } from './components/current-location/current-location.component';
import { InputLocationComponent } from './components/input-location/input-location.component';
import { CurrentForecastHourComponent } from './components/current-forecast-hour/current-forecast-hour.component';
import { HeaderComponent } from './components/header/header.component';
import { TenDaysForecastComponent } from './components/ten-days-forecast/ten-days-forecast.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentForecastComponent,
    CurrentLocationComponent,
    InputLocationComponent,
    CurrentForecastHourComponent,
    HeaderComponent,
    TenDaysForecastComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
