import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentForecastComponent } from '../components/current-forecast/current-forecast.component';
import { TenDaysForecastComponent } from '../components/ten-days-forecast/ten-days-forecast.component';
import { HomePageComponent } from '../components/home-page/home-page.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'forecastByLocation', component: CurrentForecastComponent },
  { path: 'forecastByCityName', component: CurrentForecastComponent },
  { path: 'forecastTenDays', component: TenDaysForecastComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
