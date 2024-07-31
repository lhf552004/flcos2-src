import { TestBed } from '@angular/core/testing';

import { ProcessVariablesResolverService } from './process-variables-resolver.service';

describe('ProcessVariablesResolverService', () => {
  let service: ProcessVariablesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessVariablesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
