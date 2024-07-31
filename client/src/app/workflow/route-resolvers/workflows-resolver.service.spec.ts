import { TestBed } from '@angular/core/testing';

import { WorkflowsResolverService } from './workflows-resolver.service';

describe('WorkflowsResolverService', () => {
  let service: WorkflowsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
