import { TestBed } from '@angular/core/testing';

import { VinesService } from './vines.service';

describe('VinesService', () => {
  let service: VinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
