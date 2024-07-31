import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessVariablesComponent } from './process-variables.component';

describe('ProcessVariablesComponent', () => {
  let component: ProcessVariablesComponent;
  let fixture: ComponentFixture<ProcessVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
