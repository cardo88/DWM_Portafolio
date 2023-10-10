import { TestBed } from '@angular/core/testing';

import { ProdDetailService } from './prod-detail.service';

describe('ProdDetailService', () => {
  let service: ProdDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
