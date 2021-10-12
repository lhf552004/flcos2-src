import { TestBed } from '@angular/core/testing';

import { OpcServerConfigService } from './opc-server-config.service';

describe('OpcServerConfigService', () => {
  let service: OpcServerConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcServerConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
