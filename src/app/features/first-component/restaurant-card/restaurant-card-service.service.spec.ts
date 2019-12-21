import { TestBed } from '@angular/core/testing';

import { RestaurantCardServiceService } from './restaurant-card-service.service';

describe('RestaurantCardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantCardServiceService = TestBed.get(RestaurantCardServiceService);
    expect(service).toBeTruthy();
  });
});
