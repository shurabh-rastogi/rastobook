import { TestBed, inject } from '@angular/core/testing';
import { ViewProfileService } from './view-profile-service.service';

describe('ViewProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewProfileService]
    });
  });

  it('should ...', inject([ViewProfileService], (service: ViewProfileService) => {
    expect(service).toBeTruthy();
  }));
});
