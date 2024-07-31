import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAlarmsComponent } from './summary-alarms.component';

describe('SummaryAlarmsComponent', () => {
  let component: SummaryAlarmsComponent;
  let fixture: ComponentFixture<SummaryAlarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryAlarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
