import { TestBed, async, inject } from '@angular/core/testing';

import { OrdemGuard } from './ordem.guard';

describe('OrdemGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdemGuard]
    });
  });

  it('should ...', inject([OrdemGuard], (guard: OrdemGuard) => {
    expect(guard).toBeTruthy();
  }));
});
