import { TestBed } from '@angular/core/testing';

import { CepageService } from './cepage.service';

describe('CepageService', () => {
  let service: CepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
