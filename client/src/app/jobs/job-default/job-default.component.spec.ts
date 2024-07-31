import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDefaultComponent } from './job-default.component';

describe('JobDefaultComponent', () => {
  let component: JobDefaultComponent;
  let fixture: ComponentFixture<JobDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
