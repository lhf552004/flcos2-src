import { TestBed } from '@angular/core/testing';

import { SuppliersResolverService } from './suppliers-resolver.service';

describe('SuppliersResolverService', () => {
  let service: SuppliersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
