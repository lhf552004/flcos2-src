import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowDesignerComponent } from './work-flow-designer.component';

describe('WorkFlowDesignerComponent', () => {
  let component: WorkFlowDesignerComponent;
  let fixture: ComponentFixture<WorkFlowDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFlowDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFlowDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
