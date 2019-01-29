import { TestBed } from '@angular/core/testing';

import { PasajerosService } from './pasajeros.service';

describe('PasajerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasajerosService = TestBed.get(PasajerosService);
    expect(service).toBeTruthy();
  });
});
