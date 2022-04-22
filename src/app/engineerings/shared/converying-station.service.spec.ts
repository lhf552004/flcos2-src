import { TestBed } from '@angular/core/testing';

import { ConveyingStationService } from './conveying-station.service';

describe('ConveryingStationService', () => {
  let service: ConveyingStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConveyingStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
