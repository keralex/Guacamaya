import { TestBed } from '@angular/core/testing';

import { VuelosService } from './vuelos.service';

describe('VuelosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VuelosService = TestBed.get(VuelosService);
    expect(service).toBeTruthy();
  });
});
