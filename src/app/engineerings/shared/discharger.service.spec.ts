import { TestBed } from '@angular/core/testing';

import { DischargerService } from './discharger.service';

describe('DischargerService', () => {
  let service: DischargerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
