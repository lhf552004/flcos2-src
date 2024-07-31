import { TestBed } from '@angular/core/testing';

import { WarehousesResolverService } from './warehouses-resolver.service';

describe('WarehousesResolverService', () => {
  let service: WarehousesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
