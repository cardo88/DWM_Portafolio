import { TestBed } from '@angular/core/testing';

import { HereserviceService } from './hereservice.service';

describe('HereserviceService', () => {
  let service: HereserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HereserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
