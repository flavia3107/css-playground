import { TestBed } from '@angular/core/testing';

import { CssconfigService } from './cssconfig.service';

describe('CssconfigService', () => {
  let service: CssconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
