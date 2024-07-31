import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeDefaultComponent } from './scheme-default.component';

describe('SchemeDefaultComponent', () => {
  let component: SchemeDefaultComponent;
  let fixture: ComponentFixture<SchemeDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
