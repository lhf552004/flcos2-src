import { TestBed } from '@angular/core/testing';

import { OpcNodeListResolverService } from './opc-node-list-resolver.service';

describe('OpcNodeListResolverService', () => {
  let service: OpcNodeListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcNodeListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
