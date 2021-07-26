import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDefaultComponent } from './equipment-default.component';

describe('EquipmentDefaultComponent', () => {
  let component: EquipmentDefaultComponent;
  let fixture: ComponentFixture<EquipmentDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
