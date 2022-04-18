import { TestBed } from '@angular/core/testing';

import { CurrentAlarmsResolverService } from './current-alarms-resolver.service';

describe('CurrentAlarmsResolverService', () => {
  let service: CurrentAlarmsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentAlarmsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
