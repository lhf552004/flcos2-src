import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargersComponent } from './dischargers.component';

describe('DischargersComponent', () => {
  let component: DischargersComponent;
  let fixture: ComponentFixture<DischargersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
