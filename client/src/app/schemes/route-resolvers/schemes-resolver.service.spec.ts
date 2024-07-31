import { TestBed } from '@angular/core/testing';

import { SchemesResolverService } from './schemes-resolver.service';

describe('SchemesResolverService', () => {
  let service: SchemesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
