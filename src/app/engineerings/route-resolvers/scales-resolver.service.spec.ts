import { TestBed } from '@angular/core/testing';

import { ScalesResolverService } from './scales-resolver.service';

describe('ScalesResolverService', () => {
  let service: ScalesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScalesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
