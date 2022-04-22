import { TestBed } from '@angular/core/testing';

import { ConveyingStationsResolverService } from './conveying-stations-resolver.service';

describe('ConveyingStationsResolverService', () => {
  let service: ConveyingStationsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConveyingStationsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
