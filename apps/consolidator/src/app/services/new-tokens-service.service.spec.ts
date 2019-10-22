import { TestBed } from '@angular/core/testing';

import { NewTokensServiceService } from './new-tokens-service.service';

describe('NewTokensServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewTokensServiceService = TestBed.get(NewTokensServiceService);
    expect(service).toBeTruthy();
  });
});
