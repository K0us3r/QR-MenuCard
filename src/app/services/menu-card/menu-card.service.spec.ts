import { TestBed } from '@angular/core/testing';

import { MenuCardService } from './menu-card.service';

describe('MenuCardService', () => {
  let service: MenuCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
