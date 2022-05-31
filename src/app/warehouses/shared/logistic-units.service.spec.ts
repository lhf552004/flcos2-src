import { TestBed } from '@angular/core/testing';

import { LogisticUnitsService } from './logistic-units.service';

describe('LogisticUnitsService', () => {
  let service: LogisticUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisticUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
