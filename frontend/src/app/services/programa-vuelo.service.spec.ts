import { TestBed } from '@angular/core/testing';

import { ProgramaVueloService } from './programa-vuelo.service';

describe('ProgramaVueloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramaVueloService = TestBed.get(ProgramaVueloService);
    expect(service).toBeTruthy();
  });
});
