import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcServersComponent } from './opc-servers.component';

describe('OpcServersComponent', () => {
  let component: OpcServersComponent;
  let fixture: ComponentFixture<OpcServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
