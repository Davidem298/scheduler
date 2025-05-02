import { TestBed } from '@angular/core/testing';

import { ApiDeleteService } from './api-delete.service';

describe('ApiDeleteService', () => {
  let service: ApiDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
