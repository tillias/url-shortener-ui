import { TestBed } from '@angular/core/testing';

import { UrlListService } from './url-list.service';

describe('UrlListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlListService = TestBed.get(UrlListService);
    expect(service).toBeTruthy();
  });
});
