import { TestBed } from '@angular/core/testing';

import { VineService } from './vine.service';

describe('VineService', () => {
  let service: VineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
