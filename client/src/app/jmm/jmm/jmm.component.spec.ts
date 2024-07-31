import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmmComponent } from './jmm.component';

describe('JmmComponent', () => {
  let component: JmmComponent;
  let fixture: ComponentFixture<JmmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
