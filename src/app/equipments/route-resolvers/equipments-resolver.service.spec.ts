import { TestBed } from '@angular/core/testing';

import { EquipmentsResolverService } from './equipments-resolver.service';

describe('EquipmentsResolverService', () => {
  let service: EquipmentsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
