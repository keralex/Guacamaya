import { TestBed } from '@angular/core/testing';

import { AvionService } from './avion.service';

describe('AvionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvionService = TestBed.get(AvionService);
    expect(service).toBeTruthy();
  });
});
