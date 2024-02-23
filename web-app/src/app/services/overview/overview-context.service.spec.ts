import { TestBed } from '@angular/core/testing';

import { OverviewContextService } from './overview-context.service';

describe('OverviewContextService', () => {
  let service: OverviewContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
