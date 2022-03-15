import { TestBed } from '@angular/core/testing';

import { TokenNameService } from './token-name.service';

describe('TokenNameService', () => {
  let service: TokenNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
