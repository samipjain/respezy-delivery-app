import { TestBed } from '@angular/core/testing';

import { GetDeliveryQuoteService } from './get-delivery-quote.service';

describe('GetDeliveryQuoteService', () => {
  let service: GetDeliveryQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDeliveryQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
