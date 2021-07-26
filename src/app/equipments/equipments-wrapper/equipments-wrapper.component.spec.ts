import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsWrapperComponent } from './equipments-wrapper.component';

describe('EquipmentsWrapperComponent', () => {
  let component: EquipmentsWrapperComponent;
  let fixture: ComponentFixture<EquipmentsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
