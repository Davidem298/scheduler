import { TestBed } from '@angular/core/testing';

import { ApiGetService } from './api-get.service';

describe('ApiService', () => {
  let service: ApiGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
