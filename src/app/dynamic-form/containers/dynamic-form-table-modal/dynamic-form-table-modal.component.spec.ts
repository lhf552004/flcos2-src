import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormTableModalComponent } from './dynamic-form-table-modal.component';

describe('DynamicFormTableModalComponent', () => {
  let component: DynamicFormTableModalComponent;
  let fixture: ComponentFixture<DynamicFormTableModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormTableModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
