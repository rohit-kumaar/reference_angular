import { TestBed } from '@angular/core/testing';

import { ApiUserDataService } from './api-user-data.service';

describe('ApiUserDataService', () => {
  let service: ApiUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
