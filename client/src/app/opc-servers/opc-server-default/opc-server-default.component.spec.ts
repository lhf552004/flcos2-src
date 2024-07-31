import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcServerDefaultComponent } from './opc-server-default.component';

describe('OpcServerDefaultComponent', () => {
  let component: OpcServerDefaultComponent;
  let fixture: ComponentFixture<OpcServerDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcServerDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcServerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
