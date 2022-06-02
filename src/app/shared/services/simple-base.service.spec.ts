import { TestBed } from '@angular/core/testing';

import { SimpleBaseService } from './simple-base.service';

describe('SimpleBaseService', () => {
  let service: SimpleBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
