import { TestBed, inject } from '@angular/core/testing';
import { ViewProfileServiceService } from './view-profile-service.service';

describe('ViewProfileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewProfileServiceService]
    });
  });

  it('should ...', inject([ViewProfileServiceService], (service: ViewProfileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
