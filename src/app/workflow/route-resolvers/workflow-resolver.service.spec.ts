import { TestBed } from '@angular/core/testing';

import { WorkflowResolverService } from './workflow-resolver.service';

describe('WorkflowResolverService', () => {
  let service: WorkflowResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
