import { TestBed } from '@angular/core/testing';

import { LinesResolverService } from './lines-resolver.service';

describe('LinesResolverService', () => {
  let service: LinesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
