import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcServerComponent } from './opc-server.component';

describe('OpcServerComponent', () => {
  let component: OpcServerComponent;
  let fixture: ComponentFixture<OpcServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
