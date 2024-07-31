import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyingStationsComponent } from './conveying-stations.component';

describe('ConveyingStationsComponent', () => {
  let component: ConveyingStationsComponent;
  let fixture: ComponentFixture<ConveyingStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveyingStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveyingStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
