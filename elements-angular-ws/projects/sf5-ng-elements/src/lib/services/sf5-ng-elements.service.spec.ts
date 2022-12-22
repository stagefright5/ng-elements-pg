import { TestBed } from '@angular/core/testing';

import { Sf5NgElementsService } from './sf5-ng-elements.service';

describe('Sf5NgElementsService', () => {
  let service: Sf5NgElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sf5NgElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
