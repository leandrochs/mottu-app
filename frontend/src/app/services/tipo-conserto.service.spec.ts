import { TestBed } from '@angular/core/testing';

import { TipoConsertoService } from './tipo-conserto.service';

describe('TipoConsertoService', () => {
  let service: TipoConsertoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoConsertoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
