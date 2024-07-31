import { TestBed } from '@angular/core/testing';

import { OpcServerResolverService } from './opc-server-resolver.service';

describe('OpcServerResolverService', () => {
  let service: OpcServerResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcServerResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
