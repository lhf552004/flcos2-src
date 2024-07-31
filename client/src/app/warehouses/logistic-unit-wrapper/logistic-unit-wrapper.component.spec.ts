import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticUnitWrapperComponent } from './logistic-unit-wrapper.component';

describe('LogisticUnitWrapperComponent', () => {
  let component: LogisticUnitWrapperComponent;
  let fixture: ComponentFixture<LogisticUnitWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticUnitWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticUnitWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
