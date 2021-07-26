import { TestBed } from '@angular/core/testing';

import { SectionsResolverService } from './sections-resolver.service';

describe('SectionsResolverService', () => {
  let service: SectionsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
