import { TestBed } from '@angular/core/testing';

import { RegistrationScaleService } from './registration-scale.service';

describe('RegistrationScaleService', () => {
  let service: RegistrationScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
