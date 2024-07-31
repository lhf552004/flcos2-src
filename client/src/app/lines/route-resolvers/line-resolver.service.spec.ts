import { TestBed } from '@angular/core/testing';

import { LineResolverService } from './line-resolver.service';

describe('LineResolverService', () => {
  let service: LineResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
