import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDefaultComponent } from './line-default.component';

describe('LineDefaultComponent', () => {
  let component: LineDefaultComponent;
  let fixture: ComponentFixture<LineDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
