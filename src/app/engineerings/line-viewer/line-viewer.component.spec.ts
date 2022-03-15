import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineViewerComponent } from './line-viewer.component';

describe('LineViewerComponent', () => {
  let component: LineViewerComponent;
  let fixture: ComponentFixture<LineViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
