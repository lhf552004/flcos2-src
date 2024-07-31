import { TestBed } from '@angular/core/testing';

import { ProcessStationsResolverService } from './process-stations-resolver.service';

describe('ProcessStationsResolverService', () => {
  let service: ProcessStationsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessStationsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
