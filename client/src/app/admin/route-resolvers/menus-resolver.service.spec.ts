import { TestBed } from '@angular/core/testing';

import { MenusResolverService } from './menus-resolver.service';

describe('MenusResolverService', () => {
  let service: MenusResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
