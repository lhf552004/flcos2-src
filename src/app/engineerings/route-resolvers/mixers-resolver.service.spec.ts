import { TestBed } from '@angular/core/testing';

import { MixersResolverService } from './mixers-resolver.service';

describe('MixersResolverService', () => {
  let service: MixersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MixersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
