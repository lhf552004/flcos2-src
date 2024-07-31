import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringsComponent } from './engineerings.component';

describe('EngineeringsComponent', () => {
  let component: EngineeringsComponent;
  let fixture: ComponentFixture<EngineeringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
