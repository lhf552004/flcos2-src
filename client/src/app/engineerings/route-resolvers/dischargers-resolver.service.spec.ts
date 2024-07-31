import { TestBed } from '@angular/core/testing';

import { DischargersResolverService } from './dischargers-resolver.service';

describe('DischargersResolverService', () => {
  let service: DischargersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
