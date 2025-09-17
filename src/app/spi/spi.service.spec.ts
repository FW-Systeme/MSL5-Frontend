import { TestBed } from '@angular/core/testing';

import { SpiService } from './spi.service';

describe('SpiService', () => {
  let service: SpiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
