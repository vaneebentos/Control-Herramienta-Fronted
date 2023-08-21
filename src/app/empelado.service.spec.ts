import { TestBed } from '@angular/core/testing';

import { EmpeladoService } from './empleado.service';

describe('EmpeladoService', () => {
  let service: EmpeladoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpeladoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
