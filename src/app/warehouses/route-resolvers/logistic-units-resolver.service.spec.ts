import { TestBed } from '@angular/core/testing';

import { LogisticUnitsResolverService } from './logistic-units-resolver.service';

describe('LogisticUnitsResolverService', () => {
  let service: LogisticUnitsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisticUnitsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
