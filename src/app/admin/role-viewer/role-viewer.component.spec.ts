import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleViewerComponent } from './role-viewer.component';

describe('RoleViewerComponent', () => {
  let component: RoleViewerComponent;
  let fixture: ComponentFixture<RoleViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
