import { TestBed } from '@angular/core/testing';

import { TimeDownCalculationService } from './time-down-calculation-service';

describe('TimeDownCalculationService', () => {
  let service: TimeDownCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeDownCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
