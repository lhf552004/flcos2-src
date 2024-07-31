import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessStationsComponent } from './process-stations.component';

describe('ProcessStationsComponent', () => {
  let component: ProcessStationsComponent;
  let fixture: ComponentFixture<ProcessStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
