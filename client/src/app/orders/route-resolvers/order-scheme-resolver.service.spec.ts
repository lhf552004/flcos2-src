import { TestBed } from '@angular/core/testing';

import { OrderSchemeResolverService } from './order-scheme-resolver.service';

describe('OrderSchemeResolverService', () => {
  let service: OrderSchemeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSchemeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
