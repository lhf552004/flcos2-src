import { TestBed } from '@angular/core/testing';

import { BinResolverService } from './bin-resolver.service';

describe('BinResolverService', () => {
  let service: BinResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
