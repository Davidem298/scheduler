import { TestBed } from '@angular/core/testing';

import { ApiPutService } from './api-put.service';

describe('ApiPutService', () => {
  let service: ApiPutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
