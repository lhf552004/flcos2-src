import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmHomeComponent } from './alarm-home.component';

describe('AlarmHomeComponent', () => {
  let component: AlarmHomeComponent;
  let fixture: ComponentFixture<AlarmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
