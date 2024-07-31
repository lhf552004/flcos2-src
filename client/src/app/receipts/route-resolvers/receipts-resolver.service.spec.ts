import { TestBed } from '@angular/core/testing';

import { ReceiptsResolverService } from './receipts-resolver.service';

describe('ReceiptsResolverService', () => {
  let service: ReceiptsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
