import { TestBed } from '@angular/core/testing';

import { ServivesCarteiraService } from './servives-carteira.service';

describe('ServivesCarteiraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServivesCarteiraService = TestBed.get(ServivesCarteiraService);
    expect(service).toBeTruthy();
  });
});
