import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationScalesComponent } from './registration-scales.component';

describe('RegistrationScalesComponent', () => {
  let component: RegistrationScalesComponent;
  let fixture: ComponentFixture<RegistrationScalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationScalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
