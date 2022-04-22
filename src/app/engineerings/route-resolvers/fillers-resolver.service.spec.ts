import { TestBed } from '@angular/core/testing';

import { FillersResolverService } from './fillers-resolver.service';

describe('FillersResolverService', () => {
  let service: FillersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
