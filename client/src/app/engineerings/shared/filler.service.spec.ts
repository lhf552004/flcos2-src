import { TestBed } from '@angular/core/testing';

import { FillerService } from './filler.service';

describe('FillerService', () => {
  let service: FillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
