import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseDefaultComponent } from './warehouse-default.component';

describe('WarehouseDefaultComponent', () => {
  let component: WarehouseDefaultComponent;
  let fixture: ComponentFixture<WarehouseDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
