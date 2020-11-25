import { TestBed } from '@angular/core/testing';

import { AyniService } from './ayni.service';

describe('AyniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AyniService = TestBed.get(AyniService);
    expect(service).toBeTruthy();
  });
});
