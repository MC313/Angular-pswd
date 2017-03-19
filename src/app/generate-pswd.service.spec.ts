import { TestBed, inject } from '@angular/core/testing';

import { GeneratePswdService } from './generate-pswd.service';

describe('GeneratePswdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratePswdService]
    });
  });

  it('should ...', inject([GeneratePswdService], (service: GeneratePswdService) => {
    expect(service).toBeTruthy();
  }));
});
