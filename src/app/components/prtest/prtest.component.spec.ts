import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrtestComponent } from './prtest.component';

describe('PrtestComponent', () => {
  let component: PrtestComponent;
  let fixture: ComponentFixture<PrtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
