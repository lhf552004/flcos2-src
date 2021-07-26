import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinDefaultComponent } from './bin-default.component';

describe('BinDefaultComponent', () => {
  let component: BinDefaultComponent;
  let fixture: ComponentFixture<BinDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
