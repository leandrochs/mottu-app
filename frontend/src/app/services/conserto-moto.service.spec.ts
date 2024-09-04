import { TestBed } from '@angular/core/testing';

import { ConsertoMotoService } from './conserto-moto.service';

describe('ConsertoMotoService', () => {
  let service: ConsertoMotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsertoMotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
