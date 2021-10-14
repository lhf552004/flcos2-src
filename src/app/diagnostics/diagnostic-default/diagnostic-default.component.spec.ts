import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticDefaultComponent } from './diagnostic-default.component';

describe('DiagnosticDefaultComponent', () => {
  let component: DiagnosticDefaultComponent;
  let fixture: ComponentFixture<DiagnosticDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
