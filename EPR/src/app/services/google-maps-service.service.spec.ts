import { TestBed, inject } from '@angular/core/testing';

import { GoogleMapsServiceService } from './google-maps-service.service';

describe('GoogleMapsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMapsServiceService]
    });
  });

  it('should be created', inject([GoogleMapsServiceService], (service: GoogleMapsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
