import { TestBed } from '@angular/core/testing';

import { RegistrationScalesResolverService } from './registration-scales-resolver.service';

describe('RegistrationScalesResolverService', () => {
  let service: RegistrationScalesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationScalesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
