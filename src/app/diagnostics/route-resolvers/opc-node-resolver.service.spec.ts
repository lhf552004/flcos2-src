import { TestBed } from '@angular/core/testing';

import { OpcNodeResolverService } from './opc-node-resolver.service';

describe('OpcNodeResolverService', () => {
  let service: OpcNodeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcNodeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
