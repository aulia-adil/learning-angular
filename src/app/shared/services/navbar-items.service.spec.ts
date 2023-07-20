import { TestBed } from '@angular/core/testing';

import { NavbarItemsService } from './navbar-items.service';

describe('NavbarItemsService', () => {
  let service: NavbarItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
