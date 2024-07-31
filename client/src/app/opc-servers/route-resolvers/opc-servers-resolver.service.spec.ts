import { TestBed } from '@angular/core/testing';

import { OpcServersResolverService } from './opc-servers-resolver.service';

describe('OpcServersResolverService', () => {
  let service: OpcServersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcServersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
