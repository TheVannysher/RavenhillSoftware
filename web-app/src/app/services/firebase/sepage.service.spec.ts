import { TestBed } from '@angular/core/testing';

import { SepageService } from './sepage.service';

describe('SepageService', () => {
  let service: SepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
