import { TestBed } from '@angular/core/testing';

import { SchemeResolverService } from './scheme-resolver.service';

describe('SchemeResolverService', () => {
  let service: SchemeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
