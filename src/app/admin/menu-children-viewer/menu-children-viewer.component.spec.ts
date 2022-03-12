import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChildrenViewerComponent } from './menu-children-viewer.component';

describe('MenuChildrenViewerComponent', () => {
  let component: MenuChildrenViewerComponent;
  let fixture: ComponentFixture<MenuChildrenViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuChildrenViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChildrenViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
