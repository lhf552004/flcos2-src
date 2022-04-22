import { TestBed } from '@angular/core/testing';

import { ProcessStationService } from './process-station.service';

describe('ProcessStationService', () => {
  let service: ProcessStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
