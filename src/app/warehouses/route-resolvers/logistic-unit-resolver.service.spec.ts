import { TestBed } from '@angular/core/testing';

import { LogisticUnitResolverService } from './logistic-unit-resolver.service';

describe('LogisticUnitResolverService', () => {
  let service: LogisticUnitResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisticUnitResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
