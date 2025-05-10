import { TestBed } from '@angular/core/testing';

import { AllenamentiService } from './allenamenti.service';

describe('AllenamentiService', () => {
  let service: AllenamentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllenamentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
