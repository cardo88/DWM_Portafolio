import { TestBed } from '@angular/core/testing';

import { ProdDetailJsonService } from './prod-detail-json.service';

describe('ProdDetailJsonService', () => {
  let service: ProdDetailJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdDetailJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
