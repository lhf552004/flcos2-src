import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsWrapperComponent } from './sections-wrapper.component';

describe('SectionsWrapperComponent', () => {
  let component: SectionsWrapperComponent;
  let fixture: ComponentFixture<SectionsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
