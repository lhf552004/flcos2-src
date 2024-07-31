import { TestBed } from '@angular/core/testing';

import { OpcServerService } from './opc-server.service';

describe('OpcServerService', () => {
  let service: OpcServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
