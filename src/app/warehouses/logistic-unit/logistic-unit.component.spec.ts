import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticUnitComponent } from './logistic-unit.component';

describe('LogisticUnitComponent', () => {
  let component: LogisticUnitComponent;
  let fixture: ComponentFixture<LogisticUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
