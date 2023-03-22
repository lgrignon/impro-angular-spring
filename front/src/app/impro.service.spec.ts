import { TestBed } from '@angular/core/testing';

import { ImproService } from './impro.service';

describe('ImproService', () => {
  let service: ImproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
