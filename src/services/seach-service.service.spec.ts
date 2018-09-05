import { TestBed, inject } from '@angular/core/testing';

import { SeachServiceService } from './seach-service.service';

describe('SeachServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeachServiceService]
    });
  });

  it('should be created', inject([SeachServiceService], (service: SeachServiceService) => {
    expect(service).toBeTruthy();
  }));
});
