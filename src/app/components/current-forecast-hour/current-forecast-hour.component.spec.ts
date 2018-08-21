import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentForecastHourComponent } from './current-forecast-hour.component';

describe('CurrentForecastHourComponent', () => {
  let component: CurrentForecastHourComponent;
  let fixture: ComponentFixture<CurrentForecastHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentForecastHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentForecastHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
