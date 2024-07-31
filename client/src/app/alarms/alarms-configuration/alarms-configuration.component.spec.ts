import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsConfigurationComponent } from './alarms-configuration.component';

describe('AlarmsConfigurationComponent', () => {
  let component: AlarmsConfigurationComponent;
  let fixture: ComponentFixture<AlarmsConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
