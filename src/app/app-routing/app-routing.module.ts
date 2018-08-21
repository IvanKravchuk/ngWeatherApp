import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentForecastComponent } from '../components/current-forecast/current-forecast.component';
import { TenDaysForecastComponent } from '../components/ten-days-forecast/ten-days-forecast.component';


const appRoutes: Routes = [
  // { path: '', component: CurrentForecastComponent },
  // { path: 'forecastTenDays', component: TenDaysForecastComponent }
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
