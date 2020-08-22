import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDeliveryQuoteService {

  constructor() { }

  getDeliveryQuote(dropOff_address: string, pickup_address: string): any {
    // Call HTTP Post
    return {
      "kind": "delivery_quote",
      "id": "dqt_zoFAXwMCNhpS8w",
      "created": "2020-08-22T02:24:14Z",
      "expires": "2020-08-22T02:29:14Z",
      "fee": 600,
      "currency": "USD",
      "currency_type": "USD",
      "dropoff_eta": "2020-08-22T02:59:14Z",
      "duration": 35,
      "pickup_duration": 6
  }
  }
}
