import { TestBed } from '@angular/core/testing';

import { GetgamesService } from './getgames.service';

describe('GetgamesService', () => {
  let service: GetgamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetgamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
