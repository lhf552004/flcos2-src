import { TestBed } from '@angular/core/testing';

import { AlarmsResolverService } from './alarms-resolver.service';

describe('AlarmsResolverService', () => {
  let service: AlarmsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlarmsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
