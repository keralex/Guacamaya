import { TestBed } from '@angular/core/testing';

import { PistaService } from './pista.service';

describe('PistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PistaService = TestBed.get(PistaService);
    expect(service).toBeTruthy();
  });
});
