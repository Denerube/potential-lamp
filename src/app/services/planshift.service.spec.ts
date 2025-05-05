import { TestBed } from '@angular/core/testing';

import { PlanshiftService } from './planshift.service';

describe('PlanshiftService', () => {
  let service: PlanshiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanshiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
