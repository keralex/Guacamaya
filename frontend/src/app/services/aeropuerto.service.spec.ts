import { TestBed } from '@angular/core/testing';

import { AeropuertoService } from './aeropuerto.service';

describe('AeropuertoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AeropuertoService = TestBed.get(AeropuertoService);
    expect(service).toBeTruthy();
  });
});
