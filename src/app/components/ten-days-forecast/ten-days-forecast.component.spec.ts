import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDaysForecastComponent } from './ten-days-forecast.component';

describe('TenDaysForecastComponent', () => {
  let component: TenDaysForecastComponent;
  let fixture: ComponentFixture<TenDaysForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenDaysForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenDaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
